import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    const all = this.listAllUsersUseCase.execute({ user_id } as any);

    return response.status(200).json({ body: all });
  }
}

export { ListAllUsersController };
