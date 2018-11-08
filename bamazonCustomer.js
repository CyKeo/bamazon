var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
	host: "localhost",

	port:3306,

	user: "root",

	password: "password",
	
	database: "bamazonDB"
});

connection.connect(function(err) {
	if (err) throw err;

	start();
});

function start(){
  inquirer
    .prompt({
			name: "idSelection",
			type: "input",
			message: "What is the id of the item you wish to buy?",
		},
		{
			name: "amount",
			type: "input",
			message: "How much of the item would you like to order?"
		})
}