const firstnameInputfield = document.querySelector('#firstname');
console.log(firstnameInputfield);
const spanFirstname = document.querySelector('#display-firstname');
console.log(spanFirstname);

const pressedKeys = (event) => {
    console.log(event.target.value);
    spanText = event.target.value;
    console.log(spanText);
    spanFirstname.textContent = spanText;
}
firstnameInputfield.addEventListener('keyup', pressedKeys);

const hardTruth = document.querySelector('#age');
console.log(hardTruth);
const showContent = document.querySelector('#a-hard-truth');
console.log(showContent);

const verifier =(event) => {
    console.log(event.target.value);
    ageInput = event.target.value;
    console.log(ageInput);
    if(ageInput >= 18) {
        showContent.style.visibility = "visible";
    }
    else { 
        showContent.style.visibility = "hidden";
    }
}
hardTruth.addEventListener('keyup', verifier);




const passW = document.querySelector('#pwd');
console.log(passW);
const passConf = document.querySelector('#pwd-confirm');
console.log(passConf);

const passwordListener =(event) => {
    console.log(event.target.value.length);
    lengthOfValue = event.target.value.length;
    console.log(lengthOfValue);
    /*if(lengthOfValue < 6) {
        passW.style.backgroundColor = 'red';
    }*/
}

passW.addEventListener('keyup', passwordListener);





//event's value > sting lenght vergelijken
//event's values > moeten gelijk aan zijn aan elkaar in de inputfields
