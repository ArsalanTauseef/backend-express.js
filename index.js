const express = require('express')
const app = express()
const port = 3000
const {getData, addData, updateNewProducts, deleteData} = require('./eCommerce/arr')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/my-products', (req, res) => {
  const products = getData();
  res.send(products)
})

app.post('/api/add-products', (req, res) => {
  const data = req.body;
  const createdItem = addData(data)

  res.send({
    message: "New p added",
    product: createdItem
  })
});

app.patch("/api/update-product/:id", (req, res) => {
  const id = req.params.id; 
  const data = req.body;
  
  data.id = id;

  const updatedData = updateNewProducts(data);
  if (updatedData == null) {
    res.status(400).send('Product not found');
    return;
  }

  res.send({
    message: "Update successful",
    product: updatedData
  });
});

app.delete("/api/delete-product/:id", (req, res)=>{
  const id = req.params.id;
  const data = req.body;

  const deletedProduct = deleteData(data)
  // const deletedProduct2 = deleteData(id)

  res.send({
    message: "Product deleted",
    // product: deletedProduct,
    // product: deletedProduct2
  })
})

app.listen(port, () => {
  console.log(`it serves at http://localhost:${port}`)
})