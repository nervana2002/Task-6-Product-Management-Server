class ProductController {
constructor(model) {
this.model = model;
this.getAll = this.getAll.bind(this);
this.getById = this.getById.bind(this);
this.create = this.create.bind(this);
this.update = this.update.bind(this);
this.remove = this.remove.bind(this);
this.exportJSON = this.exportJSON.bind(this);
}


getAll(req, res) {
const products = this.model.getAll();
res.status(200).json(products);
}


getById(req, res) {
const { id } = req.params;
const product = this.model.getById(id);
if (!product) return res.status(404).json({ message: 'Product not found' });
res.status(200).json(product);
}


create(req, res) {
const { name, price, category, description } = req.body;
if (!name || typeof price === 'undefined') {
return res.status(400).json({ message: 'name and price are required' });
}
const newProduct = this.model.create({ name, price, category, description });
res.status(201).json(newProduct);
}


update(req, res) {
const { id } = req.params;
const updated = this.model.update(id, req.body);
if (!updated) return res.status(404).json({ message: 'Product not found' });
res.status(200).json(updated);
}


remove(req, res) {
const { id } = req.params;
const ok = this.model.remove(id);
if (!ok) return res.status(404).json({ message: 'Product not found' });
res.status(200).json({ message: `Product ${id} deleted` });
}


exportJSON(req, res) {
const path = this.model.exportToJSONFile();
// نعيد رابط تنزيل نسبي
res.status(200).json({ message: 'Export successful', download: `/${path}` });
}
}


module.exports = ProductController;