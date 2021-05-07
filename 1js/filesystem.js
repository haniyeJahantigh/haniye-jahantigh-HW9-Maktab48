const fs = require("fs");

// // read file *********************

fs.readFile("./nano-text.txt", "Utf-8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    console.log(("RESULT", data));
  }
});

// // rename *********************

fs.rename("./nano-text.txt", "nanooo.txt", (err) => {
  if (err) {
    return console.error(err);
  }
});

// // creat file *****************

fs.writeFile(
  "newfile.txt",
  "i creat new file with writheFile Method.",
  function (err) {
    if (err) throw err;
    console.log("created!");
  }
);

// // Update *********************

fs.appendFile("newfile.txt", " update this file.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
fs.readFile("./newfile.txt", "Utf-8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    console.log(("RESULT", data));
  }
});

// // delete ***********************

fs.writeFile(
  "newfile2.txt",
  "i creat new file2 with writheFile Method.",
  function (err) {
    if (err) throw err;
    console.log("new file cleat!");
  }
);
fs.unlink("newfile2.txt", function (err) {
  if (err) throw err;
  console.log("new File deleted!");
});
