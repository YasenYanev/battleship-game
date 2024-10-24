import { Ship, Gameboard } from "../src/index";

let ship;
let gameboard;

describe("Ship", () => {
  beforeEach(() => {
    ship = new Ship(3);
  });

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

describe("Gameboard", () => {
  gameboard = new Gameboard([[["2,3"], 1]]);

  test("Recieve attack", () => {
    expect(gameboard.receiveAttack("2,3")).toEqual("hit");
  });
});
