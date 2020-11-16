const listAccounts = [
  { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
  { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
  { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
  { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
  { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
  { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
  { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
  { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
  { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
  { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
  { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
  { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
  { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
  { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
  { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
  { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
];


function setVip(listAccounts){
  for(acc of listAccounts){
    if (acc.balance >= 1000000)
      acc.type = "vip";
  }
}

function recharge(listAccounts, id, money){
  for(acc of listAccounts){
    if(acc.id === id){
      if (acc.balance === 0)
        acc.balance += money * 3;
      else 
        acc.balance += money;
    }
    
  }
}

function setTrue(listAccounts, key){
  for(acc of listAccounts){
    (acc[key] === false) && (acc[key] = true);
  }
}
function main(){
  setVip(listAccounts);
  console.log(listAccounts);
  console.log("======nap tien======");
  recharge(listAccounts, 3, 10000);
  console.log(listAccounts[2]);
  console.log("============");
  recharge(listAccounts, 1, 10000);
  console.log(listAccounts[0]);
  console.log("======set true======");
  setTrue(listAccounts, "isActive");
  console.log(listAccounts);
}

main();