const mongoose = require('mongoose');

mongoose.connect("mongodb:////127.0.0.1:27017/product", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Config : Established a connection to the database"))
    .catch(err => console.log("Config :Something went wrong when connecting to the database", err));