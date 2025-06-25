const button = document.getElementById("check-btn") ;
const displayR = document.getElementById ("result") ;



function palindrome(event){ 

    event.preventDefault();

    const userInput = document.getElementById("text-input");

    if(userInput.value === "")
    {
        window.alert("Please input a value");
        return;
    }


    let copie = userInput. value.toLowerCase();
    copie = copie.replace(/[^a-zA-Z0-9]/g, "")

    copie = copie.split("");

    let pal = true;
    for(let i=0 ; i < copie.length ; i++){
        if(copie[i] !== copie[copie. length - i -1]){
            pal = false;
            break;
        }
        }
        if(pal){
            displayR.innerText = `${userInput.value} is a palindrome`;
        }
        else {
            displayR.innerText = `${userInput.value} is not a palindrome`;
        }
    }

button.addEventListener ("click", palindrome);