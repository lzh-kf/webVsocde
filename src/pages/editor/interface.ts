export type FileType = 'file' | 'directory'
type Sort = 0 | 1
export interface Children {
  sort: Sort
  key: string
  title: string
  isLeaf: boolean
  parentId: string
  fileType: FileType
  icon: () => JSX.Element
  children?: Array<Children>
  parentHandle?: FileSystemDirectoryHandle
  handle: FileSystemFileHandle | FileSystemDirectoryHandle
}