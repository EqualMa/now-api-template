import { NowRequest, NowResponse } from "@now/node";
import * as sc from "http-status-codes";

export default (request: NowRequest, response: NowResponse) => {
  const { name = "World" } = request.query;
  response
    .status(sc.OK)
    .send(`Hello ${name} at timestamp ${new Date().getTime()}`);
};
