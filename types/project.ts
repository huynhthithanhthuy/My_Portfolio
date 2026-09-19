import { Timestamp } from "firebase/firestore";

export interface ContentImage {
  id: string;
  url: string;
}

export interface Project {
  id: string;
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
  isPinned: boolean;
  isVisible: boolean;
  contentImages: ContentImage[];
  viewsCount?: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
