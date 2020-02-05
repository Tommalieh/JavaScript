var name = prompt ("Please enter your name");
var born = prompt ("What year where you born?!")
var age = 2020 - born;
var yourAge = name + " you are " + age + " years old";
var decision = confirm ("Nice to meet you!" + " " + name);

var today = new Date();
var hourNow = today.getHours();
var greeting;

function greeting(){

    if(hourNow >= 0 && hourNow <= 24){
    
        if (hourNow > 18) {
        greeting = 'Good evening!';
        }
    
        else if (hourNow > 12) {
        greeting = 'Good afternoon!';
        }
    
        else if (hourNow > 0) {
        greeting = "Good mornig!";
        }
    
        else {
        greeting = "Welcome!";
        }

    }
}

function age(){

    

}    

greeting();

document.write('<h3>' + greeting + ' ' + name + '</h3>');
document.getElementById("demo")
                .style.color = "white";

