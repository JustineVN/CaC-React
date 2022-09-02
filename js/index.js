const color = document.querySelector(".title");
const colorp = document.querySelector("p");
var first = true;

function colors1() {
    color.style.color="rgba(189, 14, 68, 1)"
    colorp.style.color="#edc7d3"
    console.log("Color changed");
};

function colors2() {
    color.style.color="#d3f2bbc2"
    colorp.style.color="rgb(215, 250, 217)"
    console.log("Color changed back");
};


function colors(){ 
        if(first) colors1();
        else colors2();
        first = !first;
};


