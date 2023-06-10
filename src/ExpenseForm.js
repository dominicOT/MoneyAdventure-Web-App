import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';




function ExpenseForm() {
    const [expenseList, setExpenseList] = useState([]);
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newExpense = { name: expenseName, amount: expenseAmount };
        setExpenseList([...expenseList, newExpense]);
        setExpenseName('');
        setExpenseAmount(0);
    };

    const navigation = useNavigation();

    return (
        <div>
            <h2>Expense Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Expense Name:
                    <input
                        type="text"
                        value={expenseName}
                        onChange={(event) => setExpenseName(event.target.value)}
                    />
                </label>
                <label>
                    Expense Amount:
                    <input
                        type="number"
                        value={expenseAmount}
                        onChange={(event) => setExpenseAmount(Number(event.target.value))}
                    />
                </label>
                <button type="submit">Add Expense</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseList.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>₦{expense.amount}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total Expenses:</td>
                        <td>₦{expenseList.reduce((total, expense) => total + expense.amount, 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default ExpenseForm;