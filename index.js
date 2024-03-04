import express from "express";
import fs from "fs";
import { format } from "date-fns";
import path from "path";

const app = express();
const PORT = 4000; //http:localhost:4000

// creates file with the name of current timestamp
app.get("/", (req, res) => {
  let today = format(new Date(), "dd-mm-yyyy-hh-mm-ss");
  const filePath = `./TimeStamp/${today}.txt`;
  const fileContent = today;
  fs.writeFileSync(filePath, fileContent, "utf-8");
  res.status(200).send(`<h1 style="text-align: center;">Current TimeStamp: ${today}</h1><h3 style="text-align: center;">Timestamp data has been successfully saved to a folder named (TimeStamp) Change the endpoint to /read to retrieve the all Timestamp data.</h3>` );
  
});

// reading all the files from the folder
app.get("/read", (req, res) => {
  const folderPath = "TimeStamp";

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      res
        .status(500)
        .send("An error occurred while listing the files from the directory");
    } else {
      const textFiles = files.filter((file) => path.extname(file) === ".txt"); //filter the all text file
      res.status(200).json(textFiles)
    }
  });
});

app.listen(PORT, () => {
  console.log(`App Is listening in the port ${PORT}`);
});