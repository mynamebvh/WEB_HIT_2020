const number = [1, 2, 1, 2, 3, 3, 3 ,4]

const countElement = number.reduce((a,b) => {
  
  if(a[b] === undefined){
    a[b] = 1;
  }

  else if(a[b])
    a[b]++;

  return a;
},{});

console.log(countElement);