import { IData } from "./data-interface";

interface IResponse {
  success: boolean;
  message: string;
  data?: IData;
  status: string;
  statusCode: number;
}

export { IResponse };
