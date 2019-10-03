const seleniumInfra = require ('./seleniumInfra')
const selenium = new seleniumInfra()

class TodosPage {
    constructor (URL){
    selenium.getURL(URL)    
    }
    async insertAndDelete(todoText) {
        try {
            await selenium.write(todoText, "id", "todo-input") 
            await selenium.clickElement("id", "addToDo")       
            console.log("Clicked the 'add' button")        
            
            
            await selenium.isElementExists ("id", "eado7i907vef")
            console.log ("Found a new div.")
            
            if (todoText == await selenium.getTextFromElement ("id", "eado7i907vef")) {
                console.log ("New div has the same text")
            }
            else if(todoText !== await selenium.getTextFromElement ("id", "eado7i907vef")){
                console.log ("Error: New div does not has the same text")
            }
            else {
                console.log("Error: Can't find a new div.")
            }

        
            await selenium.clickElement ("xpath", "//*[@id='todos']/div/span[2]") 
            console.log ("Clicked on red button")
        
            if (await selenium.isElementExists("xpath", "//*[@id='todos']/div/span[2]") !=0){
            console.log ("The div was not deleted")
            }
            else {
                console.log ("The div was deleted")
            }
        }
            catch (error) {
                console.error("Got error in insertAndDelete function " + error)
            }

    }

    async insertAndComplete(todoText) {
        try {
            await selenium.write(todoText, "id", "todo-input") 
            await selenium.clickElement("id", "addToDo")       
            console.log("Clicked the 'add' button")   

            if (await selenium.findElementBy("id", "eado7i907vef")) {
                console.log ("Found a new div")
            }
                else {
                    console.log ("Error: Can't find a new div")
                }
            
            await selenium.clickElement ("xpath", "//*[@id='todos']/div/i")
            console.log ("Clicked green button")

                let checkGreen = await selenium.clickElement ("xpath", "//*[@id='todos']/div/i")
                if (checkGreen){
                    console.log ("The new div was checked")
                }
                else {
                    console.log ("Error: the new div was NOT checked")
                }

            }
            catch (error) {
                console.error("Got error in insertAndComplete function " + error)
            }
    }

    async insertTwoDeleteFirst(todoText1, todoText2) {
        try {
            await selenium.write(todoText1, "id", "todo-input") 
            await selenium.clickElement("id", "addToDo")       
            console.log("Clicked the 'add' button")         
            if (await selenium.getTextFromElement ("id", "eado7i907vef"))
            console.log ("Found a new div.")
            else {
                console.log("Error: Can't find a new div.")
                }
            await selenium.write(todoText2, "id", "todo-input") 
            await selenium.clickElement("id", "addToDo")       
            console.log("Clicked the 'add' button")
            await selenium.clickElement ("xpath", "//*[@id='todos']/div[1]/span[2]/i") 
            console.log ("Clicked on red button")
           
            let checkRed = selenium.clickElement ("xpath", "//*[@id='todos']/div[1]/span[2]/i") // the other red button xpath is //*[@id="todos"]/div[2]/span[2]/i
            if (checkRed){
                console.log ("the first div was deleted")
            }
            else {
                console.log ("Error: the first div was NOT deleted")
            }
    }
    catch (error) {
        console.error("Got error in insertTwoDeleteFirst function " + error)
      }
}}

module.exports = TodosPage
