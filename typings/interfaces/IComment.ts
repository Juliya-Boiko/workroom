export interface ICreateComment {
  text: string;
  taskId: string;
}

export interface IComment extends ICreateComment {
  _id: string;
  updatedAt: Date;
}

export interface IUpdateComment {
  id: string;
  update: {
    text: string;
  };
}
