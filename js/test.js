let clickCounter = 1;

function myFunction() {
    clickCounter++;
    if ( clickCounter%2 ) {
    document.body.style.backgroundColor = "black";
    document.body.style.transition = "all ease-in-out 500ms";
    } else {
        document.body.style.backgroundColor = "white"; 
        document.body.style.transition = "all ease-in-out 500ms"; 
    }
}