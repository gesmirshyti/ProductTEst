const ProductController = require('../controllers/person.controller');
module.exports = (app)=>{
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    // app.get('/api/product', ProductController.getAllProducts); 

}