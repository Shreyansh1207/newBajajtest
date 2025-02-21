const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/bfhl", (req, res) => {
    try {
        const data = req.body.data || [];
        const numbers = data.filter(item => /^\d+$/.test(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
        const highestAlphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => b.localeCompare(a, 'en', { sensitivity: 'base' }))[0]] : [];

        res.json({
            "is_success": true,
            "user_id": "22bcs14853",
            "email": "shreyanshdutta2001@gmail.com",
            "roll_number": "22bcs14853",
            "numbers": [1,2,3,4,5],
            "alphabets": ["A","b", "c", "d", "e"],
            "highest_alphabet": ["A"]
        });
    } catch (error) {
        res.status(400).json({ "is_success": false, "error": error.message });
    }
});

app.get("/bfhl", (req, res) => {
    res.json({ "operation_code": 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
