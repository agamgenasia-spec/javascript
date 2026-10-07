  const calculateOrderTotal = ( unitPrice ,quantity) =>
  {
    return unitPrice+quantity;
  }
  let a=4;
  let b=35;
  const ordertotal=calculateOrderTotal(a,b);
  console.log(ordertotal);
   const tyu=calculateOrderTotal(4,78);
   console.log(tyu);
    const ertt=calculateOrderTotal(39,76);
   console.log(ertt);
   const categories = ["Electronics", "Fashion", "Books", "Home"];
   console.log( categories[0]);
   console.log( categories[categories.length-1]);
  console.log(categories.includes("Books") );
    console.log(categories.indexOf("Fashion") );
        console.log(categories.indexOf("sports"));
        categories.push("sports");
         let Remove=categories.pop();
          categories.splice(1,1,"Games");
          
const stockAmounts = [4, 0, 7, 3, 0];
const calculateTotalStock =(array) =>
{
   let sum
for(const c of array)
{
 sum=sum+c;
}
return sum;
}
const countOutOfStock=(array)=>
{
  let sum;
  let count=0;
  for( count m of array)
  {
    if(array[m]===0)
  {
    sum=sum+array[m];
    
  }
  }
  

  return sum;
}

    

