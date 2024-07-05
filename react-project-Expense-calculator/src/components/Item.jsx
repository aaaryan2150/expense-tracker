import React from 'react'
import { useState } from 'react'

const Item = (props) => {
    const [isEditing,setIsEditing] = useState(false)
    const [newAmount,setNewAmount] = useState("")
    const [newDescription,setNewDescription] = useState("")

    const handleSave = (e) => {
        e.preventDefault()
        props.onEdit(newAmount, newDescription);  // Call the passed down onEdit function
        setIsEditing(false);
      };
    


  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      {isEditing ? (
        <div className="flex flex-col space-y-2">
            <form onSubmit={handleSave}>
            <input
            type="text"
            value={newDescription}
            placeholder={`Enter description (${props.Item_description})`}
            onChange={(e) => setNewDescription(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="number"
            value={newAmount}
            placeholder={`Enter amount (${props.Item_amount})`}
            onChange={(e) => setNewAmount(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <div className="flex justify-end space-x-2">
            <button
                type='submit'
              className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition-colors"
            //   onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-2 py-1 rounded-md hover:bg-gray-600 transition-colors"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
            </form>
          
        </div>
      ) : (
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="text-lg font-semibold">{props.Item_description}</h3>
            <p className="text-gray-600">${props.Item_amount}</p>
          </div>
          <div>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-blue-600 transition-colors"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors"
              onClick={props.onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Item
