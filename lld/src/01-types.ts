const userName: string = "vishnu";
const userAge: number = 12;
const hobbies:string[]=["sleeping","dancing"]
const coords: [number, number] = [12, 12]
enum roles{
  ADMIN,
  USER,
  GUEST,
}

const userRole: roles = roles.USER

function isAdult (userAge: number):boolean{
  return userAge >= 18;
}
const result:boolean=isAdult(userAge)
console.log(result)