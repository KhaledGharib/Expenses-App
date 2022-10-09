import {  createStore } from 'redux';

const incrementCount=({ INCREMENTBy = 1 } = {} ) => ({
    type:'INCREMENT',
    INCREMENTBy
})

const decrementCount=({decrementBy= 1}={})=>({
    type:'DECREMENT',
    decrementBy
})

const zeroCount=()=>({
    type:'ZERO'
})

const resetCount=({count}={})=>({
    type:'SET',
    count
})



// Reducers
// 1. Reducers are puer functions
// 2. Never change state or action

const countReducer = (state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":
            return{
            count:state.count +action.INCREMENTBy
            
        }
        case "DECREMENT":
            return{
                count:state.count -action.decrementBy
            }
            case "ZERO":{
                return {
                    count :0
                }
            }
            case 'SET':
                return{
                    count : action.count
                }
        default: 
        return state
    }
    
}

const store=createStore(countReducer)

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})



store.dispatch(incrementCount({INCREMENTBy:5}))
store.dispatch(incrementCount())

store.dispatch(zeroCount())

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy:10}))


store.dispatch(resetCount({count:101}))

