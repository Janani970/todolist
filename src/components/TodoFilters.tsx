import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Status, Category, Priority } from '../types/todo';

interface TodoFiltersProps {
  status: Status;
  setStatus: (status: Status) => void;
  category: Category | 'all';
  setCategory: (category: Category | 'all') => void;
  priority: Priority | 'all';
  setPriority: (priority: Priority | 'all') => void;
  search: string;
  setSearch: (search: string) => void;
}

export function TodoFilters({
  status,
  setStatus,
  category,
  setCategory,
  priority,
  setPriority,
  search,
  setSearch,
}: TodoFiltersProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className="border rounded-md px-3 py-1.5 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category | 'all')}
          className="border rounded-md px-3 py-1.5 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
          <option value="other">Other</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority | 'all')}
          className="border rounded-md px-3 py-1.5 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}