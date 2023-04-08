const url = "http://localhost:3003/"

window.addEventListener("DOMContentLoaded", async () => {
	const allInfo = await axios.get(url + "data")

	const allDara = allInfo.data

	allDara.forEach((data) => {
		showData(data)
	})
})

function pushData() {
	const name = document.getElementById("name")
	const desc = document.getElementById("desc")
	const price = document.getElementById("price")
	const qty = document.getElementById("qty")

	obj = {
		name,
		desc,
		price,
		qty,
	}

	dataProcess(obj)
}

async function dataProcess(obj) {
	try {
		const item = await axios.post(url + "data", obj)

		showData(item.data)
	} catch (err) {
		console.log(err)
	}
}

function showData(data) {
	if (document.getElementById(data.id)) {
		document.getElementById(`${data.id}-q`).innerHTML = data.qty
	} else {
		//adding info about product
		document.getElementById(
			"item-name"
		).innerHTML += `<div id = "${data.id}-n" class="mb-3">${data.name}</div>`
		document.getElementById(
			"item-desc"
		).innerHTML += `<div id = "${data.id}-d class="mb-3">${data.desc}</div>`
		document.getElementById(
			"item-price"
		).innerHTML += `<div id = "${data.id}-p" class="mb-3">${data.price}</div>`
		document.getElementById(
			"item-qty"
		).innerHTML += `<div id = "${data.id}-q" class="mb-3">${data.qty}</div>`

		//adding buttons
		document.getElementById(
			"item-buy1"
		).innerHTML += `<button type="button" onclick="buy1('${element.id}')" class="btn btn-primary"> Buy 1</button>`
		document.getElementById(
			"item-buy2"
		).innerHTML += `<button type="button" onclick="buy2('${element.id}')" class="btn btn-primary"> Buy 2</button>`
		document.getElementById(
			"item-buy3"
		).innerHTML += `<button type="button" onclick="buy3('${element.id}')" class="btn btn-primary"> Buy 3</button>`
	}
}

async function buy1(prodId) {
	try {
		const product = await axios.get(url + `data/${prodId}`)
		const quantity = product.data.qty
		const newQuntity = quantity - 1

		const updatedProduct = await axios.patch(url + `data/${prodId}`, {
			qty: newQuntity,
		})
		showData(updatedProduct.data)
	} catch (err) {
		console.log(err)
	}
}
async function buy2(prodId) {
	try {
		const product = await axios.get(url + `data/${prodId}`)
		const quantity = product.data.qty
		const newQuntity = quantity - 2

		const updatedProduct = await axios.patch(url + `data/${prodId}`, {
			qty: newQuntity,
		})
		showData(updatedProduct.data)
	} catch (err) {
		console.log(err)
	}
}

async function buy3(prodId) {
	try {
		const product = await axios.get(url + `data/${prodId}`)
		const quantity = product.data.qty
		const newQuntity = quantity - 3

		const updatedProduct = await axios.patch(url + `data/${prodId}`, {
			qty: newQuntity,
		})
		showData(updatedProduct.data)
	} catch (err) {
		console.log(err)
	}
}
