const csvFilePath='./data/chart.cvs'
const csv=require('csvtojson')
let txtFile = './data/chart.json';
var fs = require("fs");

csv().fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
        fs.writeFile("./data/chart.json", JSON.stringify(jsonObj), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });
    })