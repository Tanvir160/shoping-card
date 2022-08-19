// function updateCaseNumber(isIncrease) {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberstring = caseNumberField.value;
//     const caseNumber = parseInt(caseNumberstring);
//     let newCaseNumber; 

//     if(isIncrease){
//        newCaseNumber = caseNumber +1
//     }
//     else{
//       newCaseNumber = caseNumber -1
//     }
//     caseNumberField.value = newCaseNumber;
//     return newCaseNumber;
// }
// document.getElementById('but-case-plus').addEventListener('click', function () {
 
//   const newCaseNumber = updateCaseNumber(true)
//   totalPriceNumber = newCaseNumber *12
//   const totalPrice = document.getElementById('price');
//   totalPrice.innerText = totalPriceNumber;

// })
// document.getElementById('but-case-minus').addEventListener('click', function () {

//   const newCaseNumber = updateCaseNumber(false)

// })

// this is end 

document.getElementById('but-case-plus').addEventListener('click', function () {
      const caseNumberField = document.getElementById('case-number-field');
      const caseNumberstring = caseNumberField.value;
      const caseNumber = parseInt (caseNumberstring);
      const newCaseNumber = caseNumber +1
      caseNumberField.value = newCaseNumber;

      const totalPrice = document.getElementById('price');
      const price = totalPrice.innerText;
      creentPrice = newCaseNumber *1200
      totalPrice.innerText = creentPrice;
      
    })
    

document.getElementById('but-case-minus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberstring = caseNumberField.value;
    const caseNumber = parseInt (caseNumberstring);
    const newCaseNumber = caseNumber -1
    caseNumberField.value = newCaseNumber

    const totalPrice = document.getElementById('price');
    const price = totalPrice.innerText;
    creentPrice = newCaseNumber *1200
    totalPrice.innerText = creentPrice;
    

})


document.getElementById('but-back-plus').addEventListener('click', function () {
      const caseNumberField = document.getElementById('mobile-price');
      const caseNumberstring = caseNumberField.value;
      const caseNumber = parseInt (caseNumberstring);
      const newCaseNumber = caseNumber +1
      caseNumberField.value = newCaseNumber;

      const totalPrice = document.getElementById('mobile-total');
      const price = totalPrice.innerText;
      creentPrice = newCaseNumber *59
      totalPrice.innerText = creentPrice;
      
    })
    

document.getElementById('but-back-minus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('mobile-price');
    const caseNumberstring = caseNumberField.value;
    const caseNumber = parseInt (caseNumberstring);
    const newCaseNumber = caseNumber -1
    caseNumberField.value = newCaseNumber

    const totalPrice = document.getElementById('mobile-total');
    const price = totalPrice.innerText;
    creentPrice = newCaseNumber *59
    totalPrice.innerText = creentPrice;
    

})
// compalet 
const allTotol = document.getElementById('price');
const allTotolString = allTotol.innerText;
const mobileTotal = parseInt(allTotolString);