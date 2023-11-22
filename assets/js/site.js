// write cool JS hwere!!


const formParent = document.getElementById('tilMeld');


const myNameElement = document.getElementById('name');
const myEmailElement = document.getElementById('email');
const myZipCodeElement = document.getElementById('zipCode');

const myButton = document.getElementById('submitButton');

//myButton.addEventListener('click', callBack);


myButton.addEventListener('click', (event) => {

    // formen bruger ikke sin default som giver page reload
    event.preventDefault();

    // trim whitespace fra navn
    let myTrimmedName = myNameElement.value.trim();

    let myZipCode = myZipCodeElement.value;


    if (myTrimmedName.length >= 2 && validateEmail(myEmailElement.value) && OnlyNumber(myZipCode)) {
        console.log('formen er ydfyldt korrekt');

        formParent.innerHTML = '<h2>tak for tilmeldingen</h2><p>Jeg ejer din email nu HAAAAA haha</p>';

        /*   let myResponseElement = document.createElement('h2');
          myResponseElement.innerText = 'tak for tilmeldingen';
  
          formParent.appendChild(myResponseElement); */

    } else {

        // name evaluation
        if (myTrimmedName.length < 2) {

            console.log('name er IKKE ok');
            //alert('name er IKKE ok');

            // inline styling  
            //myNameElement.style = 'border: 2px solid red;'

            // tilføj class fra CSS
            myNameElement.classList.add('errorMarking');

        }


        // email validation
        if (!validateEmail(myEmailElement.value)) {

            console.log('email er IKKE ok');

            myEmailElement.classList.add('errorMarking');
        }


        if (!OnlyNumber(myZipCode)) {
            console.log('zip er IKKE ok');

            myZipCodeElement.classList.add('errorMarking');
        }

    }




});








function validateEmail(email) {
    // Definer en simpel regulær udtryk for email-validering
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test om emailen matcher det regulære udtryk
    let isValid = emailRegex.test(email);

    // Returner resultatet af valideringen (true eller false)
    return isValid;
}




function OnlyNumber(input) {
    // Brug et regulær udtrykning (regex) for at tjekke om strengen kun indeholder tal
    var talRegex = /^[0-9]+$/;

    // Test om input strengen opfylder kravet om kun at indeholde tal
    return talRegex.test(input);
}










function callBack(event) {
    event.preventDefault();
    console.log('clicked fra named function');
}