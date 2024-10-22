import "./styles/main.css";

class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.hasSunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits === this.length) this.hasSunk = true;
  }
}

class Gameboard {
  constructor(gameboardData) {
    this.grid = this.#initializeGameboard(gameboardData);
  }

  receiveAttack(coordinates) {}

  #placeShip(ship, gameboard) {
    const coordinates = ship[0];
    const length = ship[1];
    const newShip = new Ship(length);
    coordinates.forEach((coordinate) => {
      gameboard[this.#getCell(coordinate)].ship = newShip;
    });
  }

  #initializeGameboard(ships) {
    const gridArr = new Array(10 * 10).fill(null).map(() => ({
      ship: undefined,
      cellIsHit: false,
    }));
    ships.forEach((ship) => {
      this.#placeShip(ship, gridArr);
    });

    return gridArr;
  }

  #getCell(coordinate) {
    const x = Number(coordinate[0]);
    const y = Number(coordinate[2]);
    return y * 10 + x;
  }
}

console.log(new Gameboard([[["2,3"], 1]]));

export { Ship, Gameboard };
