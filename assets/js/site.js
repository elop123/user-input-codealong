// write cool JS hwere!!


const formParent = document.getElementById('tilMeld');


const myNameElement = document.getElementById('name');
const mySurnameElement = document.getElementById('surname');
const myAdressElement = document.getElementById('adress');
const myPostElement = document.getElementById('post');
const myEmailElement = document.getElementById('email');

const myButton = document.getElementById('submitButton');

// myButton.addEventListener('click', callBack);



myButton.addEventListener('click', (event) =>  {

    // formen bruger ikke sin default som giver page reload
    event.preventDefault();

    // trim whitespace fra navn
    let myTrimmedName = myNameElement.value.trim();

    let myTrimmeSurname =mySurnameElement.value.trim();

    let myTrimmeAdress =myAdressElement.value.trim();


    


    if (myTrimmedName.length >1 && myTrimmeSurname.length >1 && myTrimmeAdress.length >4 
      && validatePostNumber(myPostElement.value) && validateEmail(myEmailElement.value))

    {
        console.log('The form was correctly filled!');
        alert('The form is filled up!');
        
       formParent.innerHTML = ' ';

          let myResponseElement = document.createElement('h2');
          myResponseElement.innerText = 'Tak for tilmeldingen';
  
         formParent.appendChild(myResponseElement);

    } else {

        // name evaluation
        if (myTrimmedName.length  < 2) {
         console.log('Name er IKKE ok');
         alert('Navn skal have min 2 bogstave!');
            
            // inline styling  
            //myNameElement.style = 'border: 2px solid red;'

            // tilføj class fra CSS
            myNameElement.classList.toggle('errorMarking');

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
            // alert('det er ok');
        } else{
            console.log('post nummer er ikke OK')
            myPostElement.classList.toggle('errorMarking');
        }

       
        
        // email validation
        if (validateEmail(myEmailElement.value)) {

        } else {
            console.log('email er IKKE ok');
            alert('Du skal skrive en rigtig email!');
            // tilføj class fra CSS
        myEmailElement.classList.toggle('errorMarking');
        }
    }
});

        
     // postnummer validation

     function validatePostNumber(post){

        let pattern =  /[0-9]/;

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

    //  function callBack(event) {
    //      event.preventDefault();
    //      console.log('clicked fra named function');
    //     //  alert('The form needs to be filled up!')
    // }

    // function myButton2(){
    //     document.getElementById('submitButton')
    //     console.log('clicked');
    //     alert('The form is completed!');
    // }

  