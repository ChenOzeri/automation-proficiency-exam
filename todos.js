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
        
            
            let div1 = await selenium.findElementBy ("xpath", "//*[@id='todos']/div")
            
            if (div1){
                console.log ("Found new div.")
                if (todoText == await selenium.getTextFromElement ("xpath", "//*[@id='todos']/div")){
                    console.log ("New div has the same text")
                }
             else if (todoText !== await selenium.getTextFromElement ("xpath", "//*[@id='todos']/div")){
                console.log ("New div does not have the same text")
            }
        }
            else {
                console.log("Error: Can't find a new div.")
            }
        
        
            await selenium.clickElement ("xpath", "//*[@id='todos']/div/span[2]") 
            console.log ("Clicked on red button")
        
            if (await selenium.isElementExists("xpath", "//*[@id='todos']/div/span[2]")){
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

    async insertAndComplete (todoText){
        try {
            await selenium.write (todoText, "id", "todo-input") 
            await selenium.clickElement ("id", "addToDo")       
            console.log ("Clicked the 'add' button")
            
            let div2 = await selenium.findElementBy("xpath", "//*[@id='todos']/div")
            
            if (div2){
                console.log ("Found a new div.")
            }
            else {
                console.log ("Error: can't find a new div")
            }
            
            await selenium.clickElement ("xpath", "//*[@id='todos']/div/i")
            console.log ("Clicked the green button")
            let checkGreen = selenium.isElementExists ("xpath", "//*[@id='todos']/div/i")

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
            
            let divOne = await selenium.findElementBy ("xpath", "//*[@id='todos']/div")
            if (divOne)
            console.log ("Found a new div.")
            else {
                console.log("Error: Can't find a new div.")
                }

            await selenium.write(todoText2, "id", "todo-input") 
            await selenium.clickElement("id", "addToDo")       
            console.log("Clicked the 'add' button")

            let divTwo = await selenium.findElementBy ("xpath", "//*[@id='todos']/div[2]")
            
            
            if (divTwo){
                console.log ("Found a new div.")
            }
            else {
                console.log ("Error: can't find a new div.")
            }


            await selenium.clickElement ("xpath", "//*[@id='todos']/div[1]/span[2]/i") 
            console.log ("Clicked on red button")
            
            let checkRedViaDivTwo = await selenium.isElementExists ("xpath", "//*[@id='todos']/div[2]") 
            console.log (checkRedViaDivTwo)
            if (await checkRedViaDivTwo){
                console.log ("Error: the first div was NOT deleted")
            }
            else {
                console.log ("The first div was deleted")
            }
    }
            
    catch (error) {
        console.error("Got error in insertTwoDeleteFirst function " + error)
      }
}
}


module.exports = TodosPage
