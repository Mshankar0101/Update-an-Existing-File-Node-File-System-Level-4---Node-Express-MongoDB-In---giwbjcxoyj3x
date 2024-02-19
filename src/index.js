const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = ", An online learning platform";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  return await fs.appendFile(fileName, fileContent)
  
};
updateFile(fileName, fileContent );
module.exports = updateFile;


// const readFile = async () => {
//   try {
//     const content = await fs.readFile(fileName);
//     console.log("File content:", content.toString());
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// };
