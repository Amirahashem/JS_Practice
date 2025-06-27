
// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat

// [1]
let myTitle = "Elzero" , myDescription = "Elzero Web School", myDate = "25/10";

// [2]
let myCard = `
<div class="card">
  <h3>${myTitle}</h3>
  <p>${myDescription}</p>
  <span>${myDate}</span>
`;

// [3]
document.write(myCard.repeat(4));