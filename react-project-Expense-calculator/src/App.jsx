import React, { useState } from "react";
import Item from "./components/Item";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { amount, description }]);
    setAmount("");
    setDescription("");
  };

  const handleDelete = (index)=>{
    const newArray = expenses.filter((_,i)=>{
      return i!==index;
    });
    setExpenses(newArray);
  }

  const handleEdit = (index, newAmount, newDescription) => {
    const newArray = expenses.map((item, i) => {
      if (i === index) {
        return { amount: newAmount, description: newDescription };
      }
      return item;
    });
    setExpenses(newArray);
  };
  

  return (
    <div class="bg-gray-100 flex flex-col items-center h-screen">
      <div class="bg-white p-8 rounded-lg mt-8 ml-8 shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4">Expense Tracker</h2>
        <form id="expense-form" class="mb-4" onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="text" class="block text-sm font-medium text-gray-700">
              Expense Description
            </label>
            <input
              type="text"
              id="text"
              value={description}
              placeholder="Enter description..."
              required
              onChange={(e) => setDescription(e.target.value)}
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div class="mb-4">
            <label for="amount" class="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount..."
              required
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            class="inline-block w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Expense
          </button>
          
        </form>
        <div class="space-y-2">
          <h3 class="text-lg font-semibold">Expenses</h3>
          <div>
            {expenses.map((expense,index) => {
              return <Item 
              key={index}
              Item_description = {expense.description} 
              Item_amount = {expense.amount}
              onDelete={() => handleDelete(index)}
              onEdit={(newAmount, newDescription) => handleEdit(index, newAmount, newDescription)}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
