import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  onDelete: (todoId: number) => void;
  loadingIds: number[];
  statusChange: (todoId: number, changingPart: Partial<Todo>) => void;
};

export const TodoList: React.FC<Props> = ({
  todos, tempTodo, onDelete, loadingIds, statusChange,
}) => (
  <div>
    {todos.map(todo => {
      const isLoading = loadingIds.some(id => id === todo.id);

      return (
        <TodoInfo
          todo={todo}
          key={todo.id}
          onDelete={() => onDelete(todo.id)}
          isLoading={isLoading}
          statusChange={statusChange}
        />
      );
    })}

    {tempTodo && (
      <TodoInfo
        todo={tempTodo}
        key={tempTodo.id}
        onDelete={() => onDelete(tempTodo.id)}
        isLoading
        statusChange={statusChange}
      />
    )}
  </div>
);