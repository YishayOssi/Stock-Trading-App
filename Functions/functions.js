import { question } from "readline-sync";
import { stockMarket } from "../DB/db.js"



export function searchStock(identifier){
    let List_of_stocks_to_display = stockMarket.stocks.filter(stock => stock.name === identifier || stock.id === identifier)
    if(List_of_stocks_to_display.length > 0){
        return List_of_stocks_to_display}

console.log("No matches found!");
return List_of_stocks_to_display   
}



export function filterStocksByPrice(givenPrice, above){
    let List_of_stocks
    if(above === true){
    List_of_stocks = stockMarket.stocks.filter(stock => stock.currentPrice > givenPrice)}

    if(above === false){
    List_of_stocks = stockMarket.stocks.filter(stock => stock.currentPrice < givenPrice)}
    
    if(List_of_stocks.length > 1){
        return List_of_stocks}

console.log("No matches found!");
return List_of_stocks}




export function OperateOnStock(operation, identifier){
    let current_share
    while(true){
        let amount = question(`How many shares would you like to ${operation}?`)
        for(let i = 0; i < stockMarket.stocks.length; i++){
        if(stockMarket.stocks[i].id === identifier|| stockMarket.stocks[i].name === identifier){
            current_share =  stockMarket.stocks[i]}}

        if(current_share.availableStocks > amount)
            break}
        
    
        if(operation === "buy"){
                    current_share.availableStocks -= amount
                    current_share.previousPrices.push(current_share.currentPrice)
                    current_share.currentPrice = current_share.currentPrice * 1.05
                    for(let i = 0; i < stockMarket.stocks.length; i++){
                         if(stockMarket.stocks[i].category === current_share.category){
                            stockMarket.stocks[i].category = stockMarket.stocks[i].category * 1.01 }}  
            stockMarket.lastUpdated = new Date()}}  
                    

                    
                
       

    
    

export function NameAndIDCheck(identifier){
   let List_of_stocks_to_display = stockMarket.stocks.filter(stock => stock.name === identifier || stock.id === identifier)
    if(List_of_stocks_to_display.length > 0){
        return true}
return false     
}