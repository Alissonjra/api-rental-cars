import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      category_id,
      name,
      brand,
      daily_rate,
      description,
      fine_amount,
      license_plate,
    } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      category_id,
      name,
      brand,
      daily_rate,
      description,
      fine_amount,
      license_plate,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController };
