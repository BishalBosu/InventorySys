const url = "http://localhost:3008/"

window.addEventListener("DOMContentLoaded", async () => {
	const allInfo = await axios.get(url + "data")

	const allDara = allInfo.data

	allDara.forEach((data) => {
		showData(data)
	})
})

function pushData() {
	const name = document.getElementById("name").value;
	const desc = document.getElementById("desc").value;
	const price = document.getElementById("price").value;
	const qty = document.getElementById("qty").value;

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
	if (data.qty < 1) {
		//do nothing
		console.log(document.getElementById(`${data.id}-q`).value)
	}

	else if (document.getElementById(`${data.id}-q`)) {
		document.getElementById(`${data.id}-q`).innerHTML = data.qty
	} else {
		//adding info about product
		document.getElementById(
			"item-name"
		).innerHTML += `<div id = "${data.id}-n" class="mb-3">${data.name}</div><br>`
		document.getElementById(
			"item-desc"
		).innerHTML += `<div id = "${data.id}-d class="mb-3">${data.desc}</div><br><h1></h1><p></p>`
		document.getElementById(
			"item-price"
		).innerHTML += `<div id = "${data.id}-p" class="mb-3">${data.price}</div><br>`
		document.getElementById(
			"item-qty"
		).innerHTML += `<div id = "${data.id}-q" class="mb-3">${data.qty}</div><br>`

		//adding buttons
		document.getElementById(
			"item-buy1"
		).innerHTML += `<div><button type="button" onclick="buy1('${data.id}')" class="btn btn-primary"> Buy 1</button></div><br>`
		document.getElementById(
			"item-buy2"
		).innerHTML += `<div><button type="button" onclick="buy2('${data.id}')" class="btn btn-primary"> Buy 2</button></div><br>`
		document.getElementById(
			"item-buy3"
		).innerHTML += `<div><button type="button" onclick="buy3('${data.id}')" class="btn btn-primary"> Buy 3</button></div><br>`
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
