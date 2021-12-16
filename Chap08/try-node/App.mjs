import fs from "fs";

const fileName = "testImport.txt";
fs.writeFile(fileName, "Hello file", () => {
    fs.readFile(fileName, "utf8", (err, msg) => {
        console.log(msg);
    });
});

const fsp = fs.promises;
(async function(){
    const fileNamePromise = "testImportPromise.txt";
    await fsp.writeFile(fileNamePromise, "Hello Promises");
    const readTxt = await fsp.readFile(fileNamePromise, "utf8");
    console.log(readTxt);
})();