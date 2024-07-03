// ## File cleaner

// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function removeExtraText(text) {
  return text.replace(/\s+/g, " ").trim();
}
fs.readFile("heyy.txt", "utf-8", function (error, data) {
  if (error) {
    console.log(error);
  }

  const cleanData = removeExtraText(data);

  fs.writeFile("heyy.txt", cleanData, "utf-8", function (error) {
    if (error) {
      console.log(error);
      return;
    }
    console.log("file cleaned and written successfully");
  });
});

// fs.writeFile("heyy.txt")
