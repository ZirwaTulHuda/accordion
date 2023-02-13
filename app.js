// variable

const accordion = document.getElementsByClassName('content-container');

// const question = document.getElementsById('three');
// console.log(question);

// question[0].innerText = "click back to hide";

for (i=0; i< accordion.length; i++) {

    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        
    })
}
console.log("Hi bitch.");
