interface SuccessResponse<Data> {
  message: string;
  data: Data;
}

interface ErrorResponse<Data> {
  message: string;
  status: number;
  data?: Data;
}
