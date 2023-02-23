const user = { id: 1, name: "goriber Amir", job: "actor", isMale: true };
// JavaScript Object Notation(JSON)
const stringfied = JSON.stringify(user);
// console.log(user);
// console.log(stringfied);
/* { id: 1, name: 'goriber Amir', job: 'actor', isMale: true }
{"id":1,"name":"goriber Amir","job":"actor","isMale":true}*/
const shop = {
  owner: "Alia",
  address: {
    street: "Kocukhet Vooter goli",
    city: "Rabbir",
    country: "BD",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue :45000,
  isOpen : true,
  isNew : false,
};
 
const  shopJSON = JSON.stringify(shop);
const shopObj = JSON.parse(shopJSON);
console.log(shop);
console.log(shopJSON);
console.log(shopObj);

