export interface ICreateComment {
  text: string;
  taskId: string;
}

export interface IComment extends ICreateComment {
  _id: string;
  createdAt: Date;
}
