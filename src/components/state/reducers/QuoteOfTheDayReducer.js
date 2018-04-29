import {fetchQuoteOfTheDay} from '../actions/QuoteOfTheDayActions';

//import action constants
import  {FETCH_QUOTE_OF_THE_DAY_PENDING,FETCH_QUOTE_OF_THE_DAY_FULFILLED,FETCH_QUOTE_OF_THE_DAY_REJECTED}
 from '../actions/QuoteOfTheDayActions';

//initialise state
const initialState={
    quote:null,
    fetching:false,
    fetched:false,
    failed:false
}

//creating the QuoteOfTheDayFetch Reducer

export const QuoteOfTheDayReducer = (state=initialState,action)=>{
     switch (action.type){

        case FETCH_QUOTE_OF_THE_DAY_PENDING:
            return{
                ...state,
                quote:null,
                fetching:true,
                fetched:false,
                failed:false
            }
        case FETCH_QUOTE_OF_THE_DAY_FULFILLED:
            return{
                ...state,
                quote:action.payload.quoteOfTheDay,
                fetching:false,
                fetched:true,
                failed:false
            }
        case FETCH_QUOTE_OF_THE_DAY_PENDING:
            return{
                ...state,
                quote:null,
                fetching:false,
                fetched:false,
                failed:true
            }
        
        default:
            return state;
     }


}