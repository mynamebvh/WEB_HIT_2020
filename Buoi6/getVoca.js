javascript:
var voca = document.querySelectorAll(".ditem > h4");
var means = document.querySelectorAll(".ditem > p > b");

var c = [...voca].map((item) => item.innerText);
var d = [...means].map((item) => item.innerText);

var result = c.map((item,index) => {
  return item + "+" + d[index] + "_";
});

document.write(result.join(""));


