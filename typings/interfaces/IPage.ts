export interface ICreatePage {
  folderId: string;
  title: string;
  content: string;
}

export interface IPage extends ICreatePage {
  _id: string;
  updatedAt: Date;
}

export interface IUpdatePage {
  id: string;
  update: {
    title?: string;
    content?: string;
  };
}
