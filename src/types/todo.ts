export type Priority = 'low' | 'medium' | 'high';
export type Category = 'work' | 'personal' | 'shopping' | 'health' | 'other';
export type Status = 'all' | 'completed' | 'pending';

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: Category;
  priority: Priority;
  dueDate: string;
  createdAt: string;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt'>) => void;
  updateTodo: (id: string, todo: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}