import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';

test('collapsed should be true', () => {

// data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true) })


test('collapsed should be false', () => {

// data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true) })


test('reducer should throw error because action type os incorrect', () => {

// data
    const state: StateType = {
        collapsed: false
    }

    //action
expect (()=> {
    reducer(state, {type: 'FAKE-TYPE'})
}).toThrowError()
})

    //expection
