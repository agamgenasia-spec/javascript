const categories = ["Electronics", "Fashion","Books","Home"];
console.log(categories[0]);
console.log(categories[categories.length-1]);
console.log(categories.includes("Books"));
console.log(categories.indexOf("Fashion"));
console.log(categories.indexOf("Sports"));
categories.push("Sports");
console.log(categories);
categories.pop();
console.log(categories);
categories.splice(1,1,"Games");
console.log(categories);
const stockAmounts = [4, 0, 7, 3, 0];
const calculateTotalStock = array =>
{
    let sum=0;
    for(const i of array)
    {
      sum=sum+i;
    }
    return sum;
}

console.log(calculateTotalStock(stockAmounts));
const countOutOfStock=(array)=>
{
    let count=0;
    for(const i of array)
    {
        if(i===0)
      count++;
    }
    return count;
}
console.log(countOutOfStock(stockAmounts));
const counOF=(array)=>
{
    let count=0;
    for(const i=0;i<array.length;i++)
    {
        if(array[i]===0)
      count++;
    }
    return count;
}
const user = {
id: 1,
firstName:"Dana",
lastName:"Levi",
age: 17,
};
console.log(user.firstName);
console.log(user.age);
user.email="Agam@gmail.com";
console.log(`the id is ${user.id} the firstName is ${user.firstName} the lastName is ${user.lastName} the age is ${user.age} the email is ${user.email}`);
console.log(user.firstName);
const post = {
  id: 101,
  content: "JavaScript practice day",
  author: {
    id: 7,
    name: "Noa",
    username: "@noa_dev"
  },
  comments: [
    { id: 1, user: "@amit", text: "Good luck!" },
    { id: 2, user: "@lior", text: "Nice post" }
  ]
};
console.log(post.author.name);
console.log(post.author.username);
console.log( post.comments[0].text);
console.log(post.comments.length);


