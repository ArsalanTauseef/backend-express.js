const { nanoid } = require('nanoid');
const products = []

const getData = () => {
    return products
};

const addData = (product)=>{
    const updatedProducts = {
        id: nanoid(),
        ...product
    };

    products.push(updatedProducts)
    return updatedProducts
}

const updateNewProducts = (product) => {
    const index = products.findIndex((p) => p.id === product.id);
    products.splice(index, 1, product);

    return product;
}

const deleteData = (product)=> {
    const index = products.findIndex((p) => p.id === product.id);

    products.splice(index, 1)
    return product;
}

module.exports = {getData, addData, updateNewProducts, deleteData}