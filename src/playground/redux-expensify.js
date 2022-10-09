import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';

const addExpense = (
    { 
    description='',
    note='',
    amount=0,
    createdAt=0 
}={}
)=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})
const removeExpense =({id} = {})=>({
    type:'REMOVE_EXPENSE',
    id
})

const editExpense = (id,updates)=>({
    type:"EDIT_EXPENSE",
    id,
    updates
})

const expensesReducerDefaultState = []

const expensesReducer = (state =expensesReducerDefaultState, action)=>{
switch (action.type){
    case 'ADD_EXPENSE':
        return [
        ...state,
        action.expense
    ]
    case 'REMOVE_EXPENSE':
        return state.filter(({id})=>id !== action.id)
    case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id===action.id){
                return{
                    ...expense,
                    ...action.updates
                }
            }else{
                    return expense
                }
        })
    default:
        return state;
}
}



// Filter Reducer
const filterReducerDefaultState = {
    text:'',
    sorotBy:'date',
    startDate:undefined,
    endDate:undefined
}

const setTextFilter =( text ='' )=>({
    type:"nameFilter",
    text
})

const filterReducer = (state =filterReducerDefaultState, action)=>{
switch (action.type){
    case "nameFilter":
        return {
            ...state,
            text: action.text
        }
    default:
        return state;
}
}


// store  creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter:filterReducer
    })
    )

store.subscribe(()=>{
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({description: 'buying a land', amount:75000}))
const expenseTwo =store.dispatch(addExpense({description: 'Privet jett', amount:1.5}))

store.dispatch(removeExpense({id:expenseOne.expense.id}))

store.dispatch(editExpense(expenseTwo.expense.id,{amount:12}))

store.dispatch(setTextFilter('buying a land'))
store.dispatch(setTextFilter())


const demoState={
    expenses:[{
        id:"fasdfas",
        description:'khaled',
        note:'this is the final payment for that address',
        amount: 55000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}

