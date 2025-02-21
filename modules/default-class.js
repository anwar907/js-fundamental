export default class {
  constructor(name){
    this.name = name;
  }

  sayHi(){
    console.info(`say Hi to ${this.name}`)
  }
}