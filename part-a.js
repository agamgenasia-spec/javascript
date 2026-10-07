const age = 18;
const isStudent =true;
const myName = "dana";
let introduction = `my name is ${myName} , i am ${age} years old, student: ${isStudent} `;
console.log(introduction);
const course = "JavaScript";
let completedExercises;
const isReady = false;

console.log(typeof course);
console.log(typeof completedExercises);
console.log(typeof isReady);
let completedCount = 0;
 completedCount= completedCount+1;
 console.log(completedCount);
 const priceText = "120";
const quantityText = "3";
const orderNumber = 5021;
let numberPrice =Number(priceText );
let numberQuantity =Number(quantityText);
let totalPrice =numberQuantity+ numberPrice;
console.log(totalPrice);
console.log(typeof orderNumber );
let orderIdText = String(orderNumber);
console.log(typeof orderIdText);
const price = "120";
const quantity = 3;
const total = price + price + price;
console.log(total);

console.log(Number("8") + 2);
console.log(String(8) + 2);
const my_age = 17; //גיל
const has_Permission = false; //אישור
const is_Registration_Open = true; //הרשמה פתוחה
const participant_Id = 24; //מספר משתתף
if(my_age>=18 || has_Permission===true && is_Registration_Open===true)
{
    console.log("eligible");
}
else
{
 console.log("not eligible");
}
console.log( participant_Id%2==0);
if (is_Registration_Open === true && participant_Id === 24 )
{
console.log("registered");
}
if(is_Registration_Open===false)
{
    console.log(closed);
}
else if (has_Permission===false)
{
    console.log("waiting for approval");
}
else
{
console.log("registered");
}
const completed = true;
let status1 = completed ? "Done" : "in progress";
console.log(status1);
let stock=0;
const stockMessage = stock >0 ? "In-stock" : "Out of stock";
 const price1 = 750;
const label = price1 >= 700 ?" Premium" :"Regular";
console.log(label);





