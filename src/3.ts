/*
  You create a game where there are characters with different roles.
  You are currently working on the Wizard class, which should implement two interfaces - ICharacter and ISpellCaster.

  Define the ICharacter and ISpellCaster interfaces to match the requirements of the Wizard class.
  The ICharacter interface should include name and level properties, and even introduce and levelUp methods.
  The ISpellCaster interface must include a castSpell method.
*/

interface ICharacter {
  name: string;
  level: number;

  introduce(phrase: string): void;
  levelUp(): void;
}

interface ISpellCaster {
  castSpell(): void;
}

// an implementation of the Wizard class
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// class testing
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16

export {};
