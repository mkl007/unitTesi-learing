const express = require('express');
const app = express();

app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

const server = app.listen(3001, () => {
});

// Add a close method to the app object to enable closing the server
app.close = function(callback) {
  server.close(callback);
};

module.exports = { app, server }; // Export the `server` instance along with `app`
