import {List} from "../src/List";
import {assert} from 'chai'
import {expect} from 'chai'


describe('List', () => {

    var list;

    beforeEach(() => {
        list = new List();
    })

    it('creating an instance of the list', () => {
        assert(list instanceof List, 'the list was not initialized successful');
    });

    it('should add an item to the list', () => {
        list.add('dog');
        assert(list.indexOf('dog') === 0, 'the item was not added successful');
    });

    it('should return the size of the list after adding it', () => {
        list.add('dog');
        assert(list.size() === 1, 'the size returned it is not correct');
    });

    it('should clear the list after adding some elements', () => {
        list.add('dog');
        list.add('cat');
        list.add('elephant');
        list.clear();
        assert(list.size() === 0, 'the size returned it is not correct');
    });

    it('should check if an item exist after adding it', () => {
        list.add('dog');
        assert(list.contains('dog'), 'the list does not contain the item that was added');
    });

    it('should get the index of an item after adding it', () => {
        list.add('dog');
        assert(list.indexOf('dog') === 0, 'the index returned it is not correct');
    });

    it('should get an item by index', () => {
        list.add('dog');
        assert(list.get(0) === 'dog', 'the item returned it is not correct');
    });

    it('should remove an item by index', () => {
        list.add('dog');
        assert(list.remove(0) === 'dog', 'the deletion was not done successful');
    });


})
