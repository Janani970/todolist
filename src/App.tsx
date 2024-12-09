import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { TodoProvider } from './context/TodoContext';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoFilters } from './components/TodoFilters';
import { TodoList } from './components/TodoList';
import { Status, Category, Priority } from './types/todo';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [status, setStatus] = useState<Status>('all');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [priority, setPriority] = useState<Priority | 'all'>('all');
  const [search, setSearch] = useState('');

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Task Manager
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <TodoProvider>
            <AddTodoForm />
            <TodoFilters
              status={status}
              setStatus={setStatus}
              category={category}
              setCategory={setCategory}
              priority={priority}
              setPriority={setPriority}
              search={search}
              setSearch={setSearch}
            />
            <TodoList
              status={status}
              category={category}
              priority={priority}
              search={search}
            />
          </TodoProvider>
        </div>
      </div>
    </div>
  );
}

export default App;