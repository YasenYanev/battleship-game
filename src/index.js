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
  constructor(gameboardData, shipClass) {
    this.grid = {};
    this.shipClass = shipClass;
  }

  receiveAttack(coordinates) {}

  //  get ships() {
  //    return
  //  }

  #placeShip(coordinates, length) {
    const ship = new this.shipClass(length);
    coordinates.forEach((coordinate) => {
      this.grid[coordinate] = ship;
    });
  }

  initializeGameboard(ships) {
    ships.forEach((ship) => {
      this.#placeShip(ship[0], ship[1]);
    });
  }
}

export { Ship, Gameboard };

console.log(Object.entries({ asd1: 2, g45g4g: 5 }));
