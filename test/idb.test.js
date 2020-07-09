import "fake-indexeddb/auto";
import IdbService from '../js/services/idb';
import { expect } from 'chai';
import 'chai/register-should';


describe('Test the idb service', () => {
    let idbService = null;

    beforeEach(() => {
        idbService = new IdbService();
    })

    afterEach(async () => {
        await idbService.clearDb();
    })

    it('should init the db', async () => {
        should.not.exist(idbService.db);
        await idbService.initDb();
        should.exist(idbService.db);
    })

    it('should add todo to the indexedDB', async () => {
        const todos = [
        {
            "id": "1732617fb9e",
            "content": "New Tasks",
            "done": true,
            "isSync": true
            },
            {
            "id": "1732617ff72",
            "content": "Tasks 1",
            "done": false,
            "isSync": true
            }
        ]
        await idbService.setTodos(todos);
        expect(await idbService.getTodos()).to.eql(todos);
    })

    it('should update a todo', async () => {
        // Create todos
        const todos = [{
            "id": "1732617fb9e",
            "content": "New Tasks",
            "done": true,
            "isSync": true
            },
            {
            "id": "1732617ff72",
            "content": "Tasks 1",
            "done": false,
            "isSync": true
            }
        ]
        await idbService.setTodos(todos);

        const updatedTodo = {
            ...todos[0],
            content: "Updated task"
        }
        await idbService.addOrUpdateTodo(updatedTodo);

        const idbTodos = await idbService.getTodos();
        const idbUpdatedTodo = idbTodos.find(todo => todo.id === updatedTodo.id);
        expect(idbUpdatedTodo.content).to.equal('Updated task');
    })

    it('should delete todo', async () => {
        // Create todos
        const todos = [{
            "id": "1732617fb9e",
            "content": "New Tasks",
            "done": true,
            "isSync": true
            },
            {
            "id": "1732617ff72",
            "content": "Tasks 1",
            "done": false,
            "isSync": true
            }
        ]
        await idbService.setTodos(todos);

        await idbService.deleteTodo(todos[0].id);
        const idbTodos = await idbService.getTodos();
        const idbDeletedTodo = idbTodos.find(todo => todo.id === todos[0].id);
        expect(idbDeletedTodo).to.be.undefined;
    })
})