export interface ICreatePage {
  folderId: string;
  title: string;
  content: string;
}

export interface IPage extends ICreatePage {
  _id: string;
  updatedAt: Date;
  order: number;
}

export interface IUpdatePage {
  id: string;
  update: {
    title?: string;
    content?: string;
  };
}

export interface IPageOrder {
  _id: string;
  title: string;
  order: number;
}