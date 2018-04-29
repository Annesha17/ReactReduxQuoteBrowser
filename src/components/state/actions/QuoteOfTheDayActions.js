//importing service to create payload of action(Fetch_Quote_OF_TheDay)
import {fetchQuoteOfTheDay} from '../../services/QuoteService';

export const FETCH_QUOTE_OF_THE_DAY = 'FETCH_QUOTE_OF_THE_DAY';
export const FETCH_QUOTE_OF_THE_DAY_PENDING = 'FETCH_QUOTE_OF_THE_DAY_PENDING';
export const FETCH_QUOTE_OF_THE_DAY_FULFILLED = 'FETCH_QUOTE_OF_THE_DAY_FULFILLED';
export const FETCH_QUOTE_OF_THE_DAY_REJECTED = 'FETCH_QUOTE_OF_THE_DAY_REJECTED';



//defining action creator
 const fetchQuoteOfTheDayAction=()=>({
    type:FETCH_QUOTE_OF_THE_DAY,
    payload:fetchQuoteOfTheDay
})

export {fetchQuoteOfTheDayAction as fetchQuoteOfTheDay}