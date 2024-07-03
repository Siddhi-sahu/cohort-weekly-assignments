// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("4-write-to-file.md", "donzsdsdse", "utf-8", function (error) {
  console.log(error);
});
