// https://www.youtube.com/watch?v=hbWjs2Ckswc
// simple express app listening on port 3000 with static from public folder and using port 8080
const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT | 8080;

app.listen(PORT, () => {    
    console.log(`Server is running on ${PORT}`);
});