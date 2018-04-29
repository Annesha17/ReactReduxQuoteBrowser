//importing createStore from redux
import {createStore} from 'redux';

//importing reducer
import {QuoteOfTheDayReducer} from '../reducers/QuoteOfTheDayReducer';






//creating store
export const createAppStore=()=>{
    const store=createStore(QuoteOfTheDayReducer)
    return store;
}