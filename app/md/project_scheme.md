# Project Feature — Data Scheme & Integration Guide

Tài liệu này mô tả cấu trúc dữ liệu, API Firestore, và toàn bộ tính năng quản lý **Dự án** trong hệ thống Admin Portfolio.

---

## 1. Firestore Collection

**Collection name:** `projects`

---

## 2. Data Model

### `Project` (document trong Firestore)

| Field | Type | Bắt buộc | Mô tả |
|---|---|---|---|
| `id` | `string` | Auto | Document ID do Firestore tự sinh |
| `title` | `string` | ✅ | Tên dự án |
| `description` | `string` | ✅ | Mô tả ngắn (tối đa 200 ký tự), hiển thị ở trang danh sách |
| `thumbnail` | `string` | ✅ | URL ảnh đại diện dự án |
| `client` | `string` | ❌ | Tên khách hàng |
| `industry` | `string` | ❌ | Lĩnh vực (VD: Giáo dục, Thương mại) |
| `service` | `string` | ❌ | Dịch vụ thực hiện (VD: UI/UX Design, Development) |
| `platform` | `string` | ❌ | Nền tảng (VD: Web, Mobile App) |
| `myRole` | `string` | ❌ | Vai trò của tác giả trong dự án |
| `timeline` | `string` | ❌ | Thời gian thực hiện (VD: 3 tuần, Q2 2026) |
| `projectLink` | `string` | ❌ | Link dự án công khai |
| `isPinned` | `boolean` | ✅ | Ghim lên đầu danh sách portfolio |
| `isVisible` | `boolean` | ✅ | Hiển thị / ẩn dự án trên portfolio |
| `contentImages` | `ContentImage[]` | ✅ | Mảng ảnh nội dung chi tiết dự án |
| `createdAt` | `Timestamp` | Auto | Thời điểm tạo (serverTimestamp) |
| `updatedAt` | `Timestamp` | Auto | Thời điểm cập nhật cuối (serverTimestamp) |

### `ContentImage` (sub-object trong mảng `contentImages`)

| Field | Type | Mô tả |
|---|---|---|
| `id` | `string` | UUID client-generated để định danh ảnh |
| `url` | `string` | URL ảnh nội dung |

### TypeScript Types

```ts
// src/types/project.ts

import { Timestamp } from "firebase/firestore";

export interface ContentImage {
    id: string;   // crypto.randomUUID()
    url: string;
}

export interface ProjectFormValues {
    title: string;
    description: string;
    thumbnail: string;
    client?: string;
    industry?: string;
    service?: string;
    platform?: string;
    myRole?: string;
    timeline?: string;
    projectLink?: string;
}

export interface Project extends ProjectFormValues {
    id?: string;
    isPinned: boolean;
    isVisible: boolean;
    contentImages: ContentImage[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

// Dùng khi tạo mới / cập nhật (bỏ qua id, createdAt, updatedAt)
export type ProjectInput = Omit<Project, "id" | "createdAt" | "updatedAt">;
```

---

## 3. Firestore Service API

File: `src/services/projectService.ts`

### `addProject(data: ProjectInput): Promise<string>`
Tạo document mới trong collection `projects`. Tự động gắn `createdAt` và `updatedAt` bằng `serverTimestamp()`. Trả về document ID.

### `getProjects(): Promise<Project[]>`
Lấy toàn bộ danh sách dự án, sắp xếp theo `createdAt` giảm dần (mới nhất lên đầu).

### `getProjectById(id: string): Promise<Project | null>`
Lấy một dự án theo document ID. Trả về `null` nếu không tìm thấy.

### `updateProject(id: string, data: ProjectInput): Promise<void>`
Cập nhật document theo ID. Tự động cập nhật `updatedAt` bằng `serverTimestamp()`.

---

## 4. Cấu trúc File

```
src/
├── types/
│   └── project.ts                    — Interfaces & types
├── services/
│   └── projectService.ts             — Firestore CRUD functions
├── hooks/
│   ├── useProjects.ts                — Fetch danh sách + filter
│   ├── useAddProject.ts              — State + logic tạo mới
│   └── useEditProject.ts             — Fetch by ID + state + logic cập nhật
├── components/
│   └── project/
│       ├── ContentImageList.tsx      — Component danh sách ảnh nội dung
│       └── ProjectSettingsCard.tsx   — Component toggle ghim / ẩn hiện
└── app/(main)/
    ├── page.tsx                      — Danh sách dự án (table)
    └── project/
        ├── add/
        │   └── page.tsx              — Tạo dự án mới
        └── [id]/
            └── page.tsx              — Xem & chỉnh sửa dự án
```

---

## 5. Luồng người dùng

### Tạo dự án mới
```
Trang danh sách (/)
  → nhấn "Thêm dự án"
  → /project/add
  → điền form → nhấn "Lưu dự án"
  → addProject() → Firestore
  → redirect về /
```

### Chỉnh sửa dự án
```
Trang danh sách (/)
  → click vào row hoặc menu "Xem chi tiết" / "Chỉnh sửa"
  → /project/[id]
  → getProjectById(id) → điền form
  → chỉnh sửa → nhấn "Lưu thay đổi"
  → updateProject(id) → Firestore
  → redirect về /
```

---

## 6. Quy ước Firestore Security Rules (khuyến nghị)

Dưới đây là security rules tối thiểu cho collection `projects`:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Chỉ admin đã đăng nhập mới được đọc/ghi
    match /projects/{projectId} {
      allow read: if true;                        // Public portfolio đọc được
      allow write: if request.auth != null;       // Chỉ authenticated user mới write
    }
  }
}
```

> **Lưu ý:** Phía client portfolio (Next.js public) đọc collection `projects` với `isVisible == true`.
> Phía admin (dự án này) cần đăng nhập Firebase Auth để tạo/sửa dữ liệu.

---

## 7. Client-side Integration (cho portfolio public)

Để hiển thị danh sách dự án trên trang portfolio, sử dụng Firebase SDK:

```ts
// Lấy danh sách dự án công khai (isVisible = true, sắp xếp theo isPinned rồi createdAt)
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

const q = query(
  collection(db, "projects"),
  where("isVisible", "==", true),
  orderBy("isPinned", "desc"),
  orderBy("createdAt", "desc")
);
const snapshot = await getDocs(q);
const projects = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
```

> **Lưu ý Firestore:** Query kết hợp `where` + `orderBy` trên nhiều field yêu cầu tạo **Composite Index** trong Firebase Console.
> Firebase sẽ tự gợi ý link tạo index khi bạn chạy query lần đầu.

---

## 8. Môi trường & Cấu hình

Các biến môi trường cần thiết (file `.env`):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...
```
