const { writeJSONFile } = require('../utils/fileUtils');

let products = [
{
id: 1,
name: "Laptop",
price: 999.99,
category: "Electronics",
description: "High-performance laptop for programming"
},
{
id: 2,
name: "Mouse",
price: 29.99,
category: "Electronics",
description: "Wireless computer mouse"
},
{
id: 3,
name: "Keyboard",
price: 79.99,
category: "Electronics",
description: "Mechanical gaming keyboard"
}
];


const getAll = () => products;


const getById = (id) => products.find(p => p.id === Number(id)) || null;


const create = (productData) => {
const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
const newProduct = { id: newId, ...productData };
products.push(newProduct);
return newProduct;
};


const update = (id, updateData) => {
const idx = products.findIndex(p => p.id === Number(id));
if (idx === -1) return null;
products[idx] = { ...products[idx], ...updateData, id: products[idx].id };
return products[idx];
};

const remove = (id) => {
const idx = products.findIndex(p => p.id === Number(id));
if (idx === -1) return false;
products.splice(idx, 1);
return true;
};

const exportToJSONFile = (path = 'products.json') => {
writeJSONFile(path, products);
return path;
};

module.exports = {
getAll,
getById,
create,
update,
remove,
exportToJSONFile
};