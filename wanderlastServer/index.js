const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, (req, res)=>{
    console.log(`server is running on port ${PORT}`);
});

app.get('/users', async (req,res)=>{
    res.send('server created for wandershare')
})