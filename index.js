const mysql = require('mysql')
const inquirer = require('inquirer')
const table = require('console.table')
let query = ''
let results
let order = []
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
                query = `SELECT products.id, products.product_name, products.department_name, products.price, products.stock_quantity FROM products WHERE products.department_name = "${answer.department}" ORDER BY products.id`
            }
            connection.query(query, function (err, res) {
                if (err) throw err

                results = res
                //console.table(res)
                buy(results)
            })
        })
}

function buy() {
    console.table(results)
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
        .then(function (choice) {
            for (i = 0; i < results.length; i++) {
                if (choice.item == results[i].id && choice.qty <= results[i].stock_quantity) {
                    console.table(choice.item + ' ' + results[i].id + ' ' + choice.qty + ' ' + results[i].stock_quantity)
                    order.push(results[i])
                    addToOrder()
                }
                if (choice.item == results[i].id && choice.qty > results[i].stock_quantity){
                    console.log('Insufficient quantity in stock. Please reselect.')
                    buy()
                }
            }
        });
}
function addToOrder(){
    inquirer
    .prompt([{
        name: 'more',
        type: 'checkbox',
        message: 'Would you like to add to the order or checkout?',
        choices: ['Proceed to checkout', 'Add to Order']
    }])
    .then(function(check){
        if (check.more == 'Proceed to checkout') {
            customerOrder()
        }
        if (check.more == 'Add to Order') { departmentSelect() }
    })
}
function customerOrder(){
    console.table(order)
}