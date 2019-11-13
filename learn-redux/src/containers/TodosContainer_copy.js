import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Todos from '../components/Todos';
import {addTodo, toggleTodo} from '../modules/todos';

function TodosContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text), [dispatch]);
    const onToggle = id => dispatch(toggleTodo(id), [dispatch]);

    return <Todos
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
    />;
}

export default TodosContainer;
