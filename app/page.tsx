"use client"

import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const selectTodo = (todo: Todo) => {
    setCurrentTodo(todo);
  };

  // Add more functions here for editing, saving, and deleting todos

  return (
    <div className="flex">
      <div className="w-1/3 p-4 bg-gray-200">
        {/* Todo List Sidebar */}
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center justify-between p-2">
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.text}</span>
              <button onClick={() => selectTodo(todo)}>Edit</button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 p-4">
        {/* Todo Edit Component */}
        {currentTodo && (
          <div>
            <textarea className="w-full p-2" defaultValue={currentTodo.text} />
            <div className="flex justify-between">
              <button className="p-2 bg-blue-500 text-white">Save</button>
              <button className="p-2 bg-red-500 text-white">Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
