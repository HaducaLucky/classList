//! classList = Element property in Javascript used to interact
//!             with an element's list of classes (CSS classes)
//?             Allows you to make reusable classes for many elements
//?             across your webpage.

//* add()
//* remove()
//* toggle(Remove if present, Add if not)
//* replace(oldClass, newClass)
//* contains() is yung wether true or false

// const myH1 = document.getElementById("myH1");
// const myButton = document.getElementById("myButton");

//TODO: to add & remove class
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

//TODO: we can also use (add, remove) or toggle, works the same
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });

//TODO: replace method

// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => {
//     event.target.classList.replace("enabled", "disabled");
// });

//TODO: contains method

// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myH1.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// myButton.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤬";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

//! Challenge

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }
        else(
            event.target.classList.replace("enabled", "disabled")
        )
    });
});