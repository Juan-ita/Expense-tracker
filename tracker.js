class ExpenseTracker {
    constructor(){
        this.expenses = [];
    }
    addExpense(expense){
        this.expenses.push(expense);
    }
    removeExpense(index){
        this.expenses.splice(index, 1);
    }
    calculateTotal(){
        return this.expenses.reduce(
            (total, expense) => total + expense.amount, 0
        );
    }
    filterByCategory(category){
        return this.expenses.filter(
            expense => expense.category === category
        )
    }
}

module.exports = ExpenseTracker;