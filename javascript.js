function GuessNumber(){

    var randomNumber = Math.floor(Math.random()*10)+1;
    var userInput = document.getElementById('input_number').value;
    
    if(randomNumber == userInput){
        document.getElementById("heading3").innerHTML ="Good Work , the number = " + randomNumber;

    }else{
        document.getElementById("heading3").innerHTML ="Not matched , the number = " + randomNumber;


    }

}

///////////////////////////////////////////////////////////////////////////////////////////////

//to save static value 
class number{
    static counter = 1;
}


//  blank array
var item = [];


function additem(){

   var number_task2 = document.getElementById("number_task2").value;
 
   item.push("Element " + number.counter + " = :" + number_task2); //key:value

   number.counter++;
}






 function Displayitem(){

    var i = 0;

    document.getElementById("heading").innerHTML = ""; // to clear the previous data and add new data to heading just one time
    
    while(i<item.length){ 
        document.getElementById("heading").innerHTML += item[i] +"<br>";
        i++;
    }


 }