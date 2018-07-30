const mysql = require('mysql')
const inquirer = require('inquirer')
const table = require('console.table')
let query = ''

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazondb',
});

connection.connect(function (err) {
    if (err) throw err;
    departmentSelect()
});

function departmentSelect() {
    const inquirer = require('inquirer')
    inquirer
        .prompt({
            name: 'department',
            type: 'list',
            message: 'Select a department.',
            choices: ['All', 'Boardgames', 'CCG', 'LCG', 'RPG']
        })
        .then(function (answer) {
            if (answer.department === 'All') {
                query = 'SELECT * FROM products'
            } else {
                query = `SELECT products.id, products.product_name, products.department_name, products.price FROM products WHERE products.department_name = "${answer.department}" ORDER BY products.id`
            }
            connection.query(query, function (err, res) {
                if (err) throw err
                console.table(res)

                buy()
            })
        })
}

function buy() {

    inquirer
        .prompt([{
            name: 'item',
            type: 'input',
            message: 'Enter the id# of the item you would like to purchase: '
        }, {
            name: 'qty',
            type: 'input',
            message: 'Please entery the qty you would like to purchase: '
        }])
        .then(function(answer) {
            console.log(answer.item + ' ' + answer.qty)
        });
}