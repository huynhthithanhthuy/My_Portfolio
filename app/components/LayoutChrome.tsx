"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

// Ẩn Navbar ở trang detail project (ví dụ /project/abc123)
const HIDDEN_NAVBAR_PATTERN = /^\/project\/[^/]+$/;

export default function LayoutChrome({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideNavbar = HIDDEN_NAVBAR_PATTERN.test(pathname || "");

    return (
        <>
            {!hideNavbar && <Navbar />}
            <main className="flex-1">{children}</main>
        </>
    );
}