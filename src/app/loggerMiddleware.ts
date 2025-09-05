import type { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware = (storeAPI) => (next) => (action: any) => {
  console.log("Dispatching:", action.type, action);

  const result = next(action);

  console.log("Next state:", storeAPI.getState());
  return result;
};