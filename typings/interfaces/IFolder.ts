export interface IFolder {
  _id: string;
  image: string;
  companyId: string;
  createdAt: Date;
  pages: number;
  projectId: {
    _id: string;
    name: string;
  };
  users: string[];
}

export interface IFolderInfo extends Omit<IFolder, 'projectId'> {
  title: string;
}

export interface IUpdateFolder {
  id: string;
  update: {
    users?: string[];
  };
}
