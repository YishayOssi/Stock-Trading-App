import { question } from "readline-sync"
import { searchStock, filterStocksByPrice, OperateOnStock, NameAndIDCheck } from "../Functions/functions.js";


export function Menu(){
while(true){
console.log();
let menu = question(
`Please choose what you would like to do:
1. Search for a stock by name or ID
2. Showing all stocks above/below a given price
3. Buying/selling a stock
4. exit
`)


if(menu == 1){
let id_or_name = question(
`Give me a name or ID: `)
let found_stocks = searchStock(id_or_name)
console.table(found_stocks);
}


if(menu == 2){
let bool
let above_or_below = question(
`Please select which stocks you would like to see:
1. Above the given price
2. Below the given price
`)
  
if(above_or_below == 1){
    bool = true}
if(above_or_below == 2){
    bool =false}

let get_Given_price = question("Give me the given price: ")
let num = Number(get_Given_price) 
   
let stock_List = filterStocksByPrice(num, bool)
console.table(stock_List)}



if(menu == 3){
let operation
while(true){
console.log()
let Buy_or_sell = question(
`Please choose what you would like to do: 
1. Buy shares
2. Sell shares
`)
if(Buy_or_sell == 1 || Buy_or_sell == 2){
    break}

if(Buy_or_sell == 1){operation = "buy"}
if(Buy_or_sell == 2){operation = "sale"}}

let identifier
while(true){
identifier = question(`Give me a name or ID: `)
let check_identifier = NameAndIDCheck(identifier)
if(check_identifier === true){
    break}}

OperateOnStock(operation, identifier)}




if(menu == 4){
console.log("Exiting...");
process.exit()
}
}
}