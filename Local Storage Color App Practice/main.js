let listItems = document.querySelectorAll("ul li");
let experiment = document.querySelector(".experiment");
// console.log(experiment);
console.log(listItems[0].getAttribute("data-color"))
console.log(window.localStorage.getItem("background-color"))

console.log(listItems[2].getAttribute("data-color") === window.localStorage.getItem("background-color"))

if (window.localStorage.getItem("background-color")) {
    experiment.style.backgroundColor = window.localStorage.getItem("background-color");

    listItems.forEach(li => {
        li.classList.remove("active");

        if (li.getAttribute("data-color") === window.localStorage.getItem("background-color")) {
            li.classList.add("active")
        }
    })


}

listItems.forEach(li => {
    // console.log(li)
    li.addEventListener("click", function (e) {

        listItems.forEach(li => {
            li.classList.remove("active");
        })
        li.classList.add("active");

        experiment.style.backgroundColor = e.target.getAttribute("data-color");
        // console.log(e.target.getAttribute("data-color"))

        window.localStorage.setItem("background-color", e.target.getAttribute("data-color"))

    });
});

// console.log(localStorage);
// console.log(listItems);

//The second solution
// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if(window.localStorage.getItem("background-color")) {
//     // If There Is Color In Local Storage
//     //[1] add color to div
//     exp.style.backgroundColor = window.localStorage.getItem("background-color");
//     //[2] remove active class from all lis
//     lis.forEach(li => {
//         li.classList.remove("active");
//     });

//     //[3] add active class to current color
//     // console.log(document.querySelector(`[data-color='${window.localStorage.getItem("background-color")}']`))
//     document.querySelector(`[data-color='${window.localStorage.getItem("background-color")}']`).classList.add("active");

// }

// lis.forEach(li => {
//     li.addEventListener("click", e => {
//         // console.log(e.currentTarget.dataset.color);
//         // console.log(e.target.dataset.color);

//         //remove active class from all lis
//         lis.forEach(li => {
//             li.classList.remove("active");
//         })

//         //add active class to current element
//         e.currentTarget.classList.add("active");
//         // console.log(e.currentTarget);

//         //add current color to local storage
//         window.localStorage.setItem("background-color",e.currentTarget.dataset.color)

//         //change div background color
//         exp.style.backgroundColor = e.currentTarget.dataset.color;

//     });
// })