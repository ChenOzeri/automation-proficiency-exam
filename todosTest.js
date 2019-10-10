
const TodosPage = require ('./todos')



let newurl = new TodosPage("https://elevation-local-todo.herokuapp.com/")
// newurl.insertAndDelete("todoText")
// newurl.insertAndComplete("todoText")
newurl.insertTwoDeleteFirst("todoText1", "todoText2")