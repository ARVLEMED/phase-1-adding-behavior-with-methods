class Cat {
    constructor(name) {
        this.name = name;
        this.sound = 'meow'; // Default sound for Cat
    }

    speak() {
        return `${this.name} says ${this.sound}!`;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
        this.sound = 'woof'; 
    }

    speak() {
        return `${this.name} says ${this.sound}!`;
    }
}
class Bird {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.sound = 'squawk';
    }

    speak() {
        if (this.name === "Pablo") {
            return `It's me! ${this.name}, the parrot!`;
        } else {
            return `${this.name} says ${this.sound}!`;
        }
    }
}
