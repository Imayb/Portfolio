const express  = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const route = require("./route/pages")
const path = require('path')
const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', route);

// mongoose.connect('mongodb+srv://imayb:iWB9IRVm4Rkh5r3Y@cluster0.p7jcgwt.mongodb.net/portfolioDB', {useNewURLParser: true, useUnifiedTopology: true})
// .then(() => {
//     app.listen(3000, () => {
//         console.log("server is running on 3000")
//     })
// })

mongoose.connect(process.env.MONGODB_URI, {useNewURLParser: true, useUnifiedTopology: true}) 
.then(() => { 
    app.listen(process.env.PORT || 3000, () => { 
        console.log("Server has started running on 3000") 
    }) 
}) 

// iWB9IRVm4Rkh5r3Y
