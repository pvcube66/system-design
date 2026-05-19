class Vehicle{
  protected speed: number = 0;
  constructor(speed: number) {
    this.speed = speed;
  }
  public  accelerate(amount: number): void{
    this.speed += amount;
    console.log("speed in vehicle",this.speed)
  }
  public getSpeed(): number{
    return this.speed;
  }
}

class Car extends Vehicle{
  
  private fuel: number;
  constructor(fuel: number) {
     super(0)
    this.fuel = fuel;
  }
 
  accelerate(amount: number):void {
  this.fuel -= amount;
  }
  refuel(amount: number): void{
    this.fuel += amount;
    console.log("fuel in car",this.fuel)
  }
}

class Bike extends Vehicle{
  accelerate(amount:number) {
    super.accelerate(amount)
     console.log("fuel in car",super.getSpeed())
  }
}


const bike= new Bike(0);
  bike.accelerate(5);
 const car=new Car(100);
  car.accelerate(5);
const  vehicle=new Vehicle(200);
  vehicle.accelerate(5);
  