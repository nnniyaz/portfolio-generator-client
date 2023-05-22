const path = require("path");
const {parse} = require('csv-parse');
const fs = require('fs');

function TxtGen() {
    const csvFilePath = path.resolve(".", './src/shared/assets/txt/txtMaps.csv');

    const headers = ["key", "RU", "EN"];

    const fileContent = fs.readFileSync(csvFilePath, {encoding: 'utf-8'});

    console.log("generate txt from csv");

    parse(fileContent, {
        delimiter: ',',
        columns: headers,
    }, (error, result) => {
        if (error) {
            console.error(error);
            process.exit(1)
        }
        let txtMap = {}
        result.forEach((v) => {
            txtMap[v.key] = v
        })
        fs.writeFile("./src/shared/assets/txt/txt.js", "export const txt = " + JSON.stringify(txtMap), (err) => {
            if (err != null) {
                console.log("error write to txt.js", err)
                process.exit(1)
            }
        })
    })
}

TxtGen()
