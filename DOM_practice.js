//   - Practice Product With Heading And Paragraph

let myMainElement ;
let myHeading ;
let myParagraph ;

let myHeadingText;
let myParagraphText;

for (let i = 0; i <= 10; i++) {

myMainElement = document.createElement("div");
myHeading = document.createElement("h2");
myParagraph = document.createElement("p");

myHeadingText = document.createTextNode(`[${i+1}] Product Title`)
myParagraphText = document.createTextNode("Product Description");

myMainElement.className = "product";

// add heading text 
myHeading.appendChild(myHeadingText);

//append heading to main element
myMainElement.appendChild(myHeading);

//add pragrghraph text 
myParagraph.appendChild(myParagraphText);

//append pragraph to main element
myMainElement.appendChild(myParagraph);

//append main element to body
document.body.appendChild(myMainElement);

}