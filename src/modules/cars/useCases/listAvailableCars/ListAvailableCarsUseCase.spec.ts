import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listCarsAvailableUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Available car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsAvailableUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      category_id: "category_id",
      name: "Car1",
      brand: "Car_brand",
      daily_rate: 140,
      description: "car description",
      fine_amount: 100,
      license_plate: "DEF-1204",
    });

    const cars = await listCarsAvailableUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      category_id: "category_id",
      name: "Car2",
      brand: "Car_brand",
      daily_rate: 140,
      description: "car description",
      fine_amount: 100,
      license_plate: "DEF-1204",
    });

    const cars = await listCarsAvailableUseCase.execute({
      name: "Car2",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      category_id: "category_id",
      name: "Car2",
      brand: "Car_brand_test",
      daily_rate: 140,
      description: "car description",
      fine_amount: 100,
      license_plate: "DEF-1204",
    });

    const cars = await listCarsAvailableUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      category_id: "category_id",
      name: "Car2",
      brand: "Car_brand_test",
      daily_rate: 140,
      description: "car description",
      fine_amount: 100,
      license_plate: "DEF-1204",
    });

    const cars = await listCarsAvailableUseCase.execute({
      category_id: "category_id",
    });

    expect(cars).toEqual([car]);
  });
});
