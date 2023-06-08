const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const fs = require("fs");
// const Student = require('../models/student.model');

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

// const filePath = 'D:\\Programming\\DGS\\server\\student.json';

const connectDB = async () => {
    try {
        mongoose
            .connect(MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("MongoDB Connected successfully");
            });
    } catch (error) {
        console.log(`somer error occur ${error}`);
    }
};

// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading JSON file:', err);
//         return;
//     }

//     try {
//         const jsonData = JSON.parse(data);
//         // Process the JSON data or save it to the MongoDB collection
//         Student.create(jsonData)
//             .then(() => {
//                 console.log('Data imported successfully');
//             })
//             .catch((err) => {
//                 console.error('Error importing data:', err);
//             });
//     } catch (err) {
//         console.error('Error parsing JSON:', err);
//     }
// });


module.exports = connectDB;