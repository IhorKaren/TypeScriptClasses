class Key {
  private signature: number;

  constructor() {
    this.signature = Number(((Math.random() * 10000) / 10).toFixed(0));
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];

  constructor(public door: boolean, public key: Key) {}

  public comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
      console.log("Person entered the house.");
    } else {
      console.log("The door is locked. Person cannot enter.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is unlocked.");
    } else {
      console.log("Invalid key. The door remains locked.");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};