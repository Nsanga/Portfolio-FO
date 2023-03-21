const express = require('express')
const path = require('path');
var cors = require('cors');

const app = express()

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

// Start the app predictfoot
app.listen(process.env.PORT || 9000, function() {
    console.log("app portfolio mekinda mercure live  started")
})