export const PI=3.14
const PI2=3.14

export function sum(a,b){
    return a+b
}

export class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    sayHello(){
        console.log(`${this.name}say hello in ${this.age}`)
    }
}