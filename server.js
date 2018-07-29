var express = require('express');
const app = express();

app.get('/api', function(req, res) {
    res.json({
        text: 'my api'
    });
});

app.listen(3000, function() {
    console.log('App listening on port 3000.');
});