import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { Project } from "@/types/project";

/**
 * Lấy danh sách dự án công khai (isVisible = true)
 * Sắp xếp phía client: isPinned giảm dần → createdAt giảm dần
 */
export async function getPublicProjects(): Promise<Project[]> {
  const q = query(
    collection(db, "projects"),
    where("isVisible", "==", true)
  );

  const snapshot = await getDocs(q);
  const projects = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Project[];

  // Sắp xếp phía client: isPinned giảm dần -> createdAt giảm dần
  return projects.sort((a, b) => {
    if (a.isPinned !== b.isPinned) {
      return a.isPinned ? -1 : 1;
    }
    const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
    const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
    return timeB - timeA;
  });
}

/**
 * Lấy thông tin chi tiết một dự án theo ID
 */
export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as Project;
    }
    return null;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return null;
  }
}

/**
 * Tăng số lượt xem (viewsCount) của dự án trong Firestore thêm 1
 */
export async function incrementProjectViews(id: string): Promise<void> {
  try {
    const docRef = doc(db, "projects", id);
    await updateDoc(docRef, {
      viewsCount: increment(1),
    });
  } catch (error) {
    console.error("Error incrementing project views:", error);
  }
}
