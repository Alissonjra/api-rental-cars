import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create a car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      category_id: "category id",
      name: "Name car",
      brand: "Brand car",
      daily_rate: 100,
      description: "description car ",
      fine_amount: 60,
      license_plate: "ABC-1234",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", async () => {
    await createCarUseCase.execute({
      category_id: "category id",
      name: "Car1",
      brand: "Brand car",
      daily_rate: 100,
      description: "description car ",
      fine_amount: 60,
      license_plate: "ABC-1234",
    });

    await expect(
      createCarUseCase.execute({
        category_id: "category id",
        name: "Car2",
        brand: "Brand car",
        daily_rate: 100,
        description: "description car ",
        fine_amount: 60,
        license_plate: "ABC-1234",
      })
    ).rejects.toEqual(new AppError("Car already exists!"));
  });

  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      category_id: "category id",
      name: "Car availabe",
      brand: "Brand car",
      daily_rate: 100,
      description: "description car ",
      fine_amount: 60,
      license_plate: "ABC-7890",
    });

    expect(car.available).toBe(true);
  });
});
