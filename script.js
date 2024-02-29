let user = prompt("Please Enter your choice (🐍)s ,(🌊)w OR(🔫)g..");
let cpui = Math.floor(Math.random()*3);
let arr = ['s', 'w', 'g']
let cpu = arr[cpui]
console.log(cpu)

const match = (cpu, user)=> {
  if (cpu == user) {
    return "Nobody. Match is tied";
  } else if (cpu == "s" && user == "w") {
    return "cpu";
  } else if (cpu == "s" && user == "g") {
    return "user";
  } else if (cpu == "w" && user == "s") {
    return "user";
  } else if (cpu == "w" && user == "g") {
    return "cpu";
  } else if (cpu == "g" && user == "s") {
    return "cpu";
  } else if (cpu == "g" && user == "w") {
    return "user";
  }
}

let result = match(cpu, user);
//let game = document.querySelector('.game')
document.write(`CPU🖥️ :- ${cpu} <br> User👨‍💼 :- ${user} <br>Winner is : ${result}...🏆`);
document.body.style.background = "black";