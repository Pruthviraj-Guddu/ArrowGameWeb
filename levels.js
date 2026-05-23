const LEVELS = [

[
["R",null,"D"],
[null,"L",null],
["U",null,"R"]
],

[
["R","D",null],
[null,"L","D"],
["U",null,"L"]
],

[
["R","R","D"],
["U",null,"D"],
["L","L","L"]
],

[
["R","D","L","D"],
["U",null,null,"L"],
["R","U","L","U"],
[null,"R",null,"L"]
],

[
["R","D","L","D","L"],
["U",null,null,null,"U"],
["R","U","L","D","L"],
["R",null,"U",null,"U"],
["R","R","U","L","L"]
]

];

for(let i=0;i<20;i++){
  LEVELS.push(JSON.parse(JSON.stringify(
    LEVELS[i % 5]
  )));
}