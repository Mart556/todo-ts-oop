"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const todo_1 = require("../models/todo");
class TodoController {
    constructor() {
        this.todos = [];
        this.createTodo = this.createTodo.bind(this);
        this.getTodos = this.getTodos.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    createTodo(req, res, next) {
        try {
            const task = req.body.task;
            const newTodo = new todo_1.Todo(Math.random().toString(), task);
            this.todos.push(newTodo);
            res.status(201).json({
                message: 'Created new todo...',
                createdTask: newTodo
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    getTodos(req, res, next) {
        try {
            res.status(201).json({
                tasks: this.todos
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    updateTodo(req, res, next) {
        try {
            const todoId = req.params.id;
            const updatedTask = req.body.task;
            const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
            if (todoIndex < 0) {
                throw new Error('Coul not find todo with such id');
            }
            this.todos[todoIndex] = new todo_1.Todo(this.todos[todoIndex].id, updatedTask);
            res.status(201).json({
                message: 'Task is updated!',
                updatedTask: updatedTask
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    deleteTodo(req, res, next) {
        try {
            const todoId = req.params.id;
            const updatedTask = req.body.task;
            const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
            if (todoIndex < 0) {
                throw new Error('Coul not find todo with such id');
            }
            this.todos.splice(todoIndex, 1);
            res.status(201).json({
                message: 'Task is deleted!',
                updatedTask: updatedTask
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.todoController = new TodoController();
