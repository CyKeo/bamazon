var mysql = require("mysql");
var inquirer = require("inquirer")
var colors = require("colors")

var connection = mysql.createConnection({
	host: "localhost",

	port: 3306,

	user: "root",

	password: "password",

	database: "bamazonDB"
});

connection.connect(function (err) {
	if (err) throw err;

	start();
});

function start() {

	console.log("\n---------------------------------------------------------\n");
	connection.query("SELECT * FROM products", function (err, res) {
		if (err) throw err;
		for (var i = 0; i < res.length; i++) {
			console.log("Item ID: ".bold.gray + res[i].item_id + " Item Name: ".bold.grey + res[i].item_name + " Item Price: ".bold.grey + res[i].price + " Item Quantity: ".bold.grey + res[i].quantity);
		}
		console.log("\n");
		inquirer
			.prompt([
				{
					name: "id",
					type: "input",
					message: "What is the id of the item you wish to buy?",
				},
				{
					name: "amount",
					type: "input",
					message: "How much of the item would you like to order?",
				}
				
			])
			.then(function (answer) {
				console.log("\n---------------------------------------------------------\n");
				var index = res.findIndex(item => item.item_id.toString() === answer.id);
				var newAmount = res[index].quantity - answer.amount;
				if(newAmount >= 0){
					connection.query(
						"UPDATE products SET ? WHERE ?",
						[
							{
								quantity: newAmount
							},
							{
								item_id: answer.id
							}
						],
						function (error) {
							if (error) throw error;
							console.log("Item was bought successfully".bold.green)
							console.log("Your total is : $".bold.green + answer.amount * res[index].price);
							start()
					})
				} else {
					console.log("INSUFFICIENT QUANTITY".bold.red);
					start();
				}
			})
	})
}