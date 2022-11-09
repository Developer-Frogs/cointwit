import { NextApiRequest, NextApiResponse } from "next";

export interface ApiRequest<T = {}, Q = {}> extends NextApiRequest {
  body: T;
  query: Q;
}

export interface ApiResponse<T> extends NextApiResponse<T> {}
