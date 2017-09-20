import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../../actions/index';
import AddTodo from '../../components/todos/AddTodo';
import TodoList from '../../components/todos/TodoList';
import Footer from '../../components/todos/Footer';
import './index.less'
class ListPage extends React.Component{
    render(){
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div className="list-page">
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                    } />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                        dispatch(completeTodo(index))
                    } />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>
                        dispatch(setVisibilityFilter(nextFilter))
                    } />
            </div>
        )
    }
}
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(select)(ListPage)
