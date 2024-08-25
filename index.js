// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post('/bfhl', (req, res) => {
//     const data = req.body.data;
    
//     if (!Array.isArray(data)) {
//         return res.status(400).json({
//             is_success: false,
//             error: "Invalid input format"
//         });
//     }

//     const numbers = [];
//     const alphabets = [];
//     let highestLowercase = "";

//     data.forEach(item => {
//         if (/^\d+$/.test(item)) {
//             numbers.push(item);
//         } else if (/^[a-zA-Z]$/.test(item)) {
//             alphabets.push(item);
//             if (item === item.toLowerCase() && item > highestLowercase) {
//                 highestLowercase = item;
//             }
//         }
//     });

//     res.json({
//         is_success: true,
//         user_id: "john_doe_17091999",  // Replace with dynamic user_id logic
//         email: "john@xyz.com",         // Replace with dynamic email
//         roll_number: "ABCD123",        // Replace with dynamic roll number
//         numbers: numbers,
//         alphabets: alphabets,
//         highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
//     });
// });

// app.get('/bfhl', (req, res) => {
//     res.json({
//         operation_code: 1
//     });
// });

// const PORT = 5000;  // Run backend on port 5000
// app.listen(PORT, () => {
//     console.log(`Backend server is running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/bfhl', (req, res) => {
    res.json({ "operation_code": 1 });
});

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";


    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id,
            email,
            roll_number,
            numbers: [],
            alphabets: [],
            highest_alphabet: [],
          });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets
        .filter(char => char >= 'a' && char <= 'z')
        .sort().slice(-1);

    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.json(response);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});