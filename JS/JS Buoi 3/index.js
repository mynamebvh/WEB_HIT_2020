const fs = require('fs');

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject('Loi');
      } else {
        resolve(data);
      }
    });
  });
}

Promise.all([readFile('dat.txt'), readFile('data2.txt')])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// readFile('data.txt')
//   .then((data) => {
//     console.log(data);
//     return readFile('data2.txt');
//   })
//   .then((data1) => {
//     console.log(data1);
//     return readFile('data3.txt');
//   })
//   .then((data2) => console.log(data2));
