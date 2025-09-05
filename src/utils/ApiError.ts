import { AxiosError } from "axios";

export abstract class Failure {
  readonly failureMsg: string;
  constructor(failureMsg: string) {
    this.failureMsg = failureMsg;
  }
}

export class ServerFailure extends Failure {
  constructor(failureMsg: string) {
    super(failureMsg);
  }

  static fromAxiosError(error: AxiosError): ServerFailure {
    if (error.code === "ECONNABORTED") {
      return new ServerFailure("Connection Timeout, please try again later");
    }

    if (error.response) {
      return ServerFailure.fromResponse(
        error.response.status,
        error.response.data
      );
    }

    if (error.message.includes("Network Error")) {
      return new ServerFailure("No Internet Connection");
    }

    return new ServerFailure("There was an error, please try again later");
  }

  static fromResponse(statusCode: number, response: any): ServerFailure {
    if (statusCode === 400 || statusCode === 401 || statusCode === 403) {
      return new ServerFailure(response.message || "Unauthorized request");
    } else if (statusCode === 404) {
      return new ServerFailure("Error 404: The requested resource was not found");
    } else {
      return new ServerFailure("There was an error, please try again later");
    }
  }
}