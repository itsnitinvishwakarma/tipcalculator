// funciton to clear the text from the input fields
function clear(){
    document.getElementById('bill-amount').value="";
    document.getElementById('tip-percentage').value="";
    document.getElementById('people').value="";
    document.getElementById('tip-amount').value="$";
    document.getElementById('total-bill').value="$";
}

// obtaining  buttons using DOM 
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');

// adding an event listener to button "calclate"(b1)
b1.addEventListener('click', function() {

    // acquiring all the input values
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip-percentage').value;
    let numberOfPeople = document.getElementById('people').value;

    // checking for exceptions 
    if(billAmount=="" || tipPercentage=="" || numberOfPeople==""){
            alert('please fill all fields!');
            clear();
        }

    else if(billAmount < 0 || tipPercentage < 0 || numberOfPeople < 0){
        alert('please fill values greater than 0');
        clear();
    }

    else{
        //logic for calculating the tip 
    let tipAmount = billAmount * tipPercentage * 0.01;
    let tipAmountPerPerson =  ((billAmount * tipPercentage * 0.01) / numberOfPeople).toFixed(2);
    let billAmountPerPerson = ((parseFloat(billAmount) + parseFloat(tipAmount)) / numberOfPeople).toFixed(2) ;

    // putting the calculated tip and bill into corressponding fields
    document.getElementById('tip-amount').value = "$ " + tipAmountPerPerson;
    document.getElementById('total-bill').value =  "$ " + billAmountPerPerson;
    }

})

// adding eventlistener for button "clear"(b2)
b2.addEventListener('click',clear);