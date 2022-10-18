//say hello 5 times in a row

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

for(let index = 0; index < 5; index++ ) {
    console.log("Goodbye");
}

/*
for(initialization> ; <conditional> ;  <increment/decrement/next>  ) {
    // code to repeat
}

<initialization>
while (  <conditional> ) {
    //code to repeat
    <increment/decrement/next>
}
*/

let index = 0;
while(index < 5) {
    console.log("Goodbye");
    index++;
}

/* gaming loop
while( ! gameover) {
    updatePosition();
    readInput();
    render();
}
*/
// also infinite gaming loops
/*
for(;;) {

}
while(true) {

}
*/

// 10 x 10
// x, y

for(let y = 0; y<= 10 ; y++){
    let row = "";
    for (let x = 0; x <= 10; x++) {
        row += (x*y) + " ";
    
    }
        
   // console.log(y);
   console.log(row);
}

