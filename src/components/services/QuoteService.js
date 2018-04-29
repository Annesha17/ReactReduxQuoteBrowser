import axios from 'axios';


const API_BASE_URL = 'https://favqs.com/api';
const API_KEY = "d918598bb7bbfcfc8a84bf9e43bd7009";
//process.env.FAVQS_API_KEY;

const requestConfig = {
    headers: {
        Authorization: `Token token="${API_KEY}"`
    }
};

export const fetchQuoteOfTheDay = () =>{
    const url=`${API_BASE_URL}/qotd`;

    return new Promise((resolve,reject)=>{
        axios.get(url,requestConfig)
        .then((response)=>response.data)
        

    })


}