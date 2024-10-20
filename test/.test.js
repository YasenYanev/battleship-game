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
  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("Recieve attack", () => {
    gameboard.receiveAttack("e2");
    expect(gameboard["e2"]).toEqual("hit");
  });
});
