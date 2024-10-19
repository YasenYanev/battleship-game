import { Ship } from "../src/index";

let ship;

beforeEach(() => {
  ship = new Ship(3);
});

describe("Ship class test", () => {
  test("Test ship hits", () => {
    ship.hit();
    expect(ship.hits).toEqual(1);
  });

  test("Test ship sunk method", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.isSunk();
    expect(ship.hasSunk).toBe(true);
  });
});
