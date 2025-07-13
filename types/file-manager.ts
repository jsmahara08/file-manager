export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  size: number;
  modified: string;
  path: string;
  extension?: string;
  parentId?: string;
}

export interface FileManagerState {
  currentPath: string;
  files: FileItem[];
  selectedFiles: string[];
  viewMode: 'grid' | 'list';
  sortBy: 'name' | 'size' | 'modified';
  sortOrder: 'asc' | 'desc';
  clipboard: {
    files: string[];
    operation: 'copy' | 'cut' | null;
  };
  isLoading: boolean;
  error: string | null;
}

// Explicit modal types for clarity and type safety
export type ModalType = 'rename' | 'createFolder' | 'delete' | 'move' | 'preview';

export interface FileModalsState {
  rename: boolean;
  createFolder: boolean;
  delete: boolean;
  move: boolean;
  preview: boolean;
  renameFileId: string;
  deleteFileIds: string[];
  previewFile: FileItem | null;
}

export interface FileOperation {
  // Note: fixed missing closing quote for 'create-folder'
  type: 'upload' | 'download' | 'delete' | 'rename' | 'move' | 'copy' | 'create-folder' | 'preview';
  fileIds: string[];
  targetPath?: string;
  newName?: string;
}

export interface ContextMenuItem {
  label: string;
  icon: string;
  action: () => void;
  disabled?: boolean;
  separator?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}
