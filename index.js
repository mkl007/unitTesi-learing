const express = require('express')
const app = express();


app.get('/user', function (req, res) {
    console.log({ name: 'john' })
    res.status(200).json({ name: 'john' });
});


app.listen(3001, () => {
    console.log('connected')
})
module.exports = { app };
