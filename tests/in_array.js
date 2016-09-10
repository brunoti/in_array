const test = require('ava')
const in_array = require('../in_array')
const toString = Object.prototype.toString
const arrayOfNumbers = [1,2,3,4]
const arrayOfCandies = ['chocolate', 'ice cream']
const object = {
    number: 1,
    string: 'chocolate',
};

test('is a function', t => {
    let string = toString.call(in_array)
    t.is(string, '[object Function]')
})

test('has to return true if the item is in the array', t => {
    t.plan(12)
    t.true(in_array(1, arrayOfNumbers))
    t.true(in_array(2, arrayOfNumbers))
    t.true(in_array(3, arrayOfNumbers))
    t.true(in_array(4, arrayOfNumbers))
    t.true(in_array(1, arrayOfNumbers, true))
    t.true(in_array(2, arrayOfNumbers, true))
    t.true(in_array(3, arrayOfNumbers, true))
    t.true(in_array(4, arrayOfNumbers, true))
    t.true(in_array('chocolate', arrayOfCandies))
    t.true(in_array('ice cream', arrayOfCandies))
    t.true(in_array('chocolate', arrayOfCandies, true))
    t.true(in_array('ice cream', arrayOfCandies, true))
})

test('has to return false if the item is not in the array', t => {
    t.false(in_array(5, arrayOfNumbers))
})

test('has to find a string like "1" in [1] on loose mode and not on strict mode', t => {
    t.pass(2)
    t.true(in_array('1', [1]))
    t.false(in_array('1', [1], true))
})

test('has to return true if the item is a value of the object', t => {
    t.plan(4)
    t.true(in_array(1, object))
    t.true(in_array(1, object, true))
    t.true(in_array('chocolate', object))
    t.true(in_array('chocolate', object, true))
})

test('has to return false if the item is not a value of the object', t => {
    t.plan(4)
    t.false(in_array(2, object))
    t.false(in_array(2, object, true))
    t.false(in_array('ice cream', object))
    t.false(in_array('ice cream', object, true))
})

test('has to find a string like "1" in {object: 1} on loose mode and not in strict mode', t => {
    t.pass(2)
    t.true(in_array('1', object))
    t.false(in_array('1', object, true))
})
