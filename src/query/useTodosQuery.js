import { useQuery } from "react-query";
import { fetchTodo, fetchTodos } from "../api/todos";
import { todoKeys } from "./keys.constant";

export function useTodosQuery(filters) {
    return useQuery(todoKeys.list(filters), () => fetchTodos(filters));
}

export function useTodoDetailQuery(id) {
    return useQuery(todoKeys.detail(id), () => fetchTodo(id));
}
