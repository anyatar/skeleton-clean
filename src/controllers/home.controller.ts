import { Request, Response } from "express";

export function welcome(req: Request, res: Response): Response {
  console.log("xxx");
  return res.json({ message: "xxxx" });
}

