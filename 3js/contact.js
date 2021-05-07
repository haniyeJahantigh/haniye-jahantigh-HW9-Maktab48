const fs = require("fs");
fs.readFile("./name.txt", "utf-8", function (err, data) {
  fs.readFile("./number.txt", "utf-8", function (err2, data2) {
    let arr1 = data.split("\r\n");
    console.log(arr1);
    let arr2 = data2.split("\r \n");

    let str = [];
    for (let i = 0; i < arr1.length; i++) {
      let newArr = arr1[i].split("-");
      console.log(newArr);
      str.push(`${arr1[i]} number: ${arr2[i]} \n`);
    }
    console.log(str);
    fs.writeFile("./result.txt", str.join(""), function () {});
  });
});
