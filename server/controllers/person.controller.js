const Product = require('../models/person.model');    /* this is new */
module.exports.index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
       message: "Hello World"
    });
}

module.exports.createProduct =(request,response)=>{
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

// module.exports.getAllProducts = (request, response) => {
//     Product.find({})
//         .then(product => {
//             console.log(product); //console logs are optional, but they are highly recommended for troubleshooting!
//             response.json(product);
//         })
//         .catch(err => {
//             console.log(err)
//             response.status(300).json(err)
//         })
// }