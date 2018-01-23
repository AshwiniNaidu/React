for(var i=1; i<=5; i++) {
    console.log(i);
}
console.log(i); //prints value "6" as for loop is in global scope. 
                //To restrict its scope, use `let` instead of `var`

let f = () =>  "Hello ABC!";

console.log(f());

function change() {
    const d = document.getElementById("header");
    const r = d.getAttribute("reply");
    d.innerHTML = r;
}