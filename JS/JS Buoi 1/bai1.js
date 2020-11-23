const listPersons = [
  { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
  { name: "Lê Văn Nam", age: 60, gender: "nam" },
  { name: "Trần Chiến Công", age: 8, gender: "nam" },
  { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
  { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
  { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
  { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
  { name: "Hà Văn Phòng", age: 30, gender: "nam" },
  { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
  { name: "Lê Văn Hà", age: 55, gender: "nam" },
];

function countPersonByGender(listPerson, gender) {
  let count;
  // do something
  count = listPerson.filter((person) => person.gender === gender).length;
  return count;
}

function statisticsByAge(listPerson) {
  // do something
  let obj = {
    treCon: 0,
    thanhNien: 0,
    nguoiGia: 0
  }

  for(person of listPerson){
    if(person.age < 18)
      obj["treCon"]++;
    else if(person.age >= 18 && person.age <=30 )
      obj["thanhNien"]++;
    else 
      obj["nguoiGia"]++;
  }
  return obj;
}

function main() {
  console.log(countPersonByGender(listPersons, 'nam'));
  console.log(countPersonByGender(listPersons, 'nu'));
  console.log(statisticsByAge(listPersons));
}

main();