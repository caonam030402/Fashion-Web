export interface SuccessResponse<Data> {
  message: string;
  data: Data;
}

export interface ErrorResponse<Data> {
  message: string;
  status: number;
  data?: Data;
}
