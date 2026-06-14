let expenses = [];

//Category
let selectedCategory = "";

const cards =
document.querySelectorAll(".category-card");

cards.forEach(card => {
    card.addEventListener("click", ()=> {
        //Removes active styling from all cards
        cards.forEach(c => c.classList.remove("border-2", "border-sky-500", "bg-sky-50"))
        //Save category text
        selectedCategory = card.dataset.category;
        //Highlight the specific card clicked
        card.classList.add("border-2", "border-sky-500", "bg-sky-50")
    });
});

//Button
const form = document.getElementById("expenseForm")
form.addEventListener("submit", addExpense)

//Form
function addExpense(event){
    event.preventDefault();

//Checks if the category card was clicked
if(!selectedCategory){
  alert("Please select a category");
  return;
}

//Grabs information from the text boxes
    const description = document.getElementById("description").value;
    const amount = Number(document.getElementById("amount").value);

//Builds the expense object
    const expense = {
        description,
        amount: amount,
        category: selectedCategory
    };
    //Saves it to the array and updates the screen.
    expenses.push(expense);
    displayExpenses();
    updateTotal();

    //This clears the input box so u can add anotherone
    document.getElementById("description").value ="";
    document.getElementById("amount").value="";
}


function displayExpenses(){

    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    expenses.forEach((expense, index) => {

    
     expenseList.innerHTML += `
    <div class ="bg-gray-100 p-4 rounded-xl flex justify-between mt-4">
    
    <div>
    <h3>${expense.description}</h3>
        <p>
        Ksh ${expense.amount} . ${expense.category}
        </p>
    </div>
    <button onclick = "deleteExpense (${index})" class= "bg-red-500 text-white px-4 rounded-xl cursor-pointer">Delete</button>
        </div>
    `;     
    });

}

//Delete Expense
function deleteExpense(index){
    expenses.splice(index,1);
    displayExpenses(); 
        updateTotal();

}

function updateTotal(){
    let total = 0;
    expenses.forEach(expense => {
        total += expense.amount;
    });

    document.getElementById("totalAmount").textContent = `Ksh. ${total}`;
}
   