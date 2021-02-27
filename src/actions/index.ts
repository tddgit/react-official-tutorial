import axios from 'axios';
import { Dispatch } from 'redux';

interface Todo {
    title: string;
    id: number;
    completed: boolean;
}

interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

enum ActionTypes {
    fetchTodos,
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);

        dispatch<FetchTodosAction>({
            type: 'ActionTypes.fetchTodos',
            payload: response.data,
        });
    };
};
