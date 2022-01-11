// const importantItems = document.querySelectorAll(".important");
// console.log(importantItems);

// // Select the first element from th list of .important items
// // console.log(importantItems[0]);
// // importantItems[0].title = "This is an important item";
// // importantItems[1].title = "This is an important item";
// // console.log(importantItems[1]);
// // importantItems[2].title ="This is an important item";
// // console.log(importantItems[2]);

// for (let index = 0; index < importantItems.length; index = index + 1) {
//     importantItems[index].title = "This is an important item";
//     console.log(importantItems[0]);
// }
// const allImages = document.querySelectorAll("img");
// console.log(allImages);

// for (let i = 0; i < allImages.length; i = i + 1) {
//     // if(allImages[i].classList.contains("important")) {
//     //     console.log(allImages[i]);
//     // } else {
//     //     console.log("img with no important class: ");
//     //     console.log(allImages[i]);
//     // }

//     if(!allImages[i].classList.contains("important")) {
//         console.log(allImages[i]);
//         allImages[i].style.display = "none";
//     }
// }

//const contentAndClass = document.querySelectorAll('p')
//console.log(contentAndClass[0].innerText);

//for (let i = 0; i < contentAndClass.length; i = i + 1) {
    //console.log(contentAndClass[i].innerText, contentAndClass[i].className);
//}


(function(){
    //1, random color function - RGB
    function getRandomColor(){
        var rgb='rgb('+Math.floor(Math.random()*255)+','
                 +Math.floor(Math.random()*255)+','
                 +Math.floor(Math.random()*255)+')';
        console.log(rgb);
        return rgb;
    }
    const colorChange = document.querySelectorAll('p')
    for (let i = 0; i < contentAndClass.length; i = i + 1) {
        colorChange[i].style.color = "setRandomColor"();
    }
})
