import React from 'react';
import { TodoItem } from './TodoItem';
import { Status, Category, Priority, Todo } from '../types/todo';
import { useTodo } from '../context/TodoContext';

interface TodoListProps {
  status: Status;
  category: Category | 'all';
  priority: Priority | 'all';
  search: string;
}

export function TodoList({ status, category, priority, search }: TodoListProps) {
  const { todos } = useTodo();

  const filteredTodos = todos.filter((todo) => {
    const matchesStatus =
      status === 'all' ||
      (status === 'completed' && todo.completed) ||
      (status === 'pending' && !todo.completed);

    const matchesCategory = category === 'all' || todo.category === category;
    const matchesPriority = priority === 'all' || todo.priority === priority;
    const matchesSearch =
      todo.title.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesCategory && matchesPriority && matchesSearch;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No tasks found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}