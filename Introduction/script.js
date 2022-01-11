console.log(document.title);
document.title = "Modifying the DOM"
document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "rgb(155, 84, 209)";

var c = document.body.children;
for(children of c) {
    console.log(children);
}

