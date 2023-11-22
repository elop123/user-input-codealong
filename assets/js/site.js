// write cool JS hwere!!


const formParent = document.getElementById('tilMeld');


const myNameElement = document.getElementById('name');
const mySurnameElement = document.getElementById('surname');
const myAdressElement = document.getElementById('adress');
const myPostElement = document.getElementById('post');
const myEmailElement = document.getElementById('email');
const myZipCodeElement = document.getElementById('zipCode');

const myButton = document.getElementById('submitButton');

myButton.addEventListener('click', callBack);



myButton.addEventListener('click', (event) =>  {

    // formen bruger ikke sin default som giver page reload
    event.preventDefault();

    // trim whitespace fra navn
    let myTrimmedName = myNameElement.value.trim();

<<<<<<< HEAD
    let myTrimmeSurname =mySurnameElement.value.trim();

    let myTrimmeAdress =myAdressElement.value.trim();



=======
    let myZipCode = myZipCodeElement.value;


    if (myTrimmedName.length >= 2 && validateEmail(myEmailElement.value) && OnlyNumber(myZipCode)) {
        console.log('formen er ydfyldt korrekt');
>>>>>>> 0be4b1e6f61b7656c01df19a02f77c0cfb10da89


    if (myTrimmedName.length > 2 && myTrimmeSurname.length > 2 && myTrimmeAdress > 5 && validatePostNumber(myPostElement.value) && validateEmail(myEmailElement.value))
    {
        console.log('The form was correctly filled!');
        


        // formParent.innerText = '<h2>Tak for tilmeldingen!</h2>';

          let myResponseElement = document.createElement('h2');
          myResponseElement.innerText = 'tak for tilmeldingen';
  
         formParent.appendChild(myResponseElement);

    } else {

        // name evaluation
<<<<<<< HEAD
        if (myTrimmedName.length  < 2) {
         console.log('Name er IKKE ok');
         alert('Navn skal have min 2 bogstave!');
            
=======
        if (myTrimmedName.length < 2) {

            console.log('name er IKKE ok');
            //alert('name er IKKE ok');

>>>>>>> 0be4b1e6f61b7656c01df19a02f77c0cfb10da89
            // inline styling  
            //myNameElement.style = 'border: 2px solid red;'

            // tilføj class fra CSS
            myNameElement.classList.add('errorMarking');

        }

        // surname evaluation
        if (myTrimmeSurname.length < 2){
            console.log('surname er IKKE ok');
            alert('Efternavn skal have min 2 bogstave!');

            
            // tilføj class fra CSS
            mySurnameElement.classList.toggle('errorMarking');

        }
        // adress evaluation
        if (myTrimmeAdress.length < 5){
            console.log('adresse er IKKE ok');
            alert('Du skal fylde en rigtig adresse!');

            // tilføj class fra CSS
            myAdressElement.classList.toggle('errorMarking');

        }
        // postnummer evaluation
        if (validatePostNumber(myPostElement.value)){

        } else{
            console.log('post nummer er ikke OK')
            alert("Please enter only numbers!")
            myPostElement.classList.toggle('errorMarking');
        }

       
        
        // email validation
        if (!validateEmail(myEmailElement.value)) {

            console.log('email er IKKE ok');
<<<<<<< HEAD
            alert('Du skal skrive en rigtig email!');
            // tilføj class fra CSS
        myEmailElement.classList.toggle('errorMarking');
=======

            myEmailElement.classList.add('errorMarking');
        }


        if (!OnlyNumber(myZipCode)) {
            console.log('zip er IKKE ok');

            myZipCodeElement.classList.add('errorMarking');
>>>>>>> 0be4b1e6f61b7656c01df19a02f77c0cfb10da89
        }
    }
});

        
     // postnummer validation

     function validatePostNumber(post){

        let pattern =  /^-?\d*\.?\d+$/;

        let valid = pattern.test(post);

        return valid;
        }

    function validateEmail(email) {
       // Definer en simpel regulær udtryk for email-validering
       let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       // Test om emailen matcher det regulære udtryk
       let isValid = emailRegex.test(email);

       // Returner resultatet af valideringen (true eller false)
        return isValid;
    }

     function callBack(event) {
         event.preventDefault();
         console.log('clicked fra named function');
         
         alert('The form needs to be filled up!')
    }

<<<<<<< HEAD
    
=======
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
>>>>>>> 0be4b1e6f61b7656c01df19a02f77c0cfb10da89
