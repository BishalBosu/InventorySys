const Saman = require("../models/saman")

exports.getData = (req, res, next) => {
	Saman.findAll()
		.then((products) => {
			res.json(products)
		})
		.catch((err) => console.log(err))
}

exports.postData = (req, res, next) => {
	const name = req.body.name
	const desc = req.body.desc
	const price = req.body.price
	const qty = req.body.qty

	Saman.create({
		name: name,
		desc: desc,
		price: price,
		qty: qty,
	})
		.then((product) => {
			res.json(product)
		})
		.catch((err) => console.log(err))
}

exports.patchData = (req, res, next) => {
	const prodId = req.params.productId
	const newQuntity = req.body.qty

	Saman.findByPk(prodId)
		.then(product =>{
			return product.update({qty: newQuntity})
		})
		.then(product => res.json(product))
		.catch((err) => console.log(err))
}
