export interface Milestone {
  id: string;
  title: string;
  date: string;
  marks: string;
  description: string;
}

export interface DocumentFile {
  id: string;
  title: string;
  description?: string;
  /** OneDrive share link — opens in browser viewer */
  viewUrl: string;
  /** OneDrive direct download link (append &download=1 to share link) */
  downloadUrl: string;
}

export interface DocumentGroup {
  id: string;
  category: string;
  description: string;
  icon: string; // lucide icon name reference
  files: DocumentFile[];
}

export interface PresentationLink {
  id: string;
  title: string;
  date: string;
  /** OneDrive direct download link */
  downloadUrl: string;
  /** File type label */
  fileType: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  achievements: string[];
  imageUrl: string;
}
