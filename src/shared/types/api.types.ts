import { Model } from 'mongoose';

export interface IMakeDao<IDao, IModel> {
    ({ model }: { [key: string]: Model<IModel> }): Readonly<IDao>;
}
export interface IShopDao{
    
}

export enum ApiErrorMessage {
    HTTP_400 = 'Bad request',
    HTTP_404 = 'Not found',
    VALIDATION_ERROR = 'The request did not pass validation rules',
    BODY_NULL = "This request must include a 'body'",
    INVALID_ID = "This request must include a valid 'id'",
}

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}