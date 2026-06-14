const ExpenseTracker = require("./Tracker")
describe("Expense Tracker Test", () => {
    test("add expenses", () => {
        const tracker = new ExpenseTracker();

        tracker.addExpense({
            description: "Lunch",
            amount: 500,
            category: "Food"
        });
        expect(tracker.expenses.length).toBe(1);
    });

    test("remove expenses", ()=>{
        const tracker = new ExpenseTracker();

        tracker.addExpense({
            description: "Lunch",
            amount: 500,
            category: "Lunch"
        });
        tracker.removeExpense(0);
        expect(tracker.expenses.length).toBe(0);
    });

    test("calculate total expenses", ()=>{
        const tracker = new ExpenseTracker();

        tracker.addExpense({
            description: "Lunch",
            amount: 500,
            category: "Food",
        });
        tracker.addExpense({
            description: "Bus",
            amount: 100,
            category: "Transport",
        });
        expect(tracker.calculateTotal()).toBe(600)
    });

    test("filters expenses by category", ()=>{
        const tracker = new ExpenseTracker()
        tracker.addExpense({
            description: "Lunch",
            amount: 500,
            category: "Food",
        });
        tracker.addExpense({
            description: "Bus",
            amount: 100,
            category: "Transport",
        });
        const foodExpenses = tracker.filterByCategory("Food");

        expect(foodExpenses.length).toBe(1)
    })
})