import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Quotes() {
    const [quote,setQuote]=useState([])
    const fecthQuotes =async()=>{
        try{
            const resp=await axios.get("https://dummyjson.com/quotes/random/10");
            console.log(resp);
            setQuote(resp.data)

        }catch (error){
            console.log(error);

        }
    };
    useEffect(()=>{
        fecthQuotes();
    },[])
    console.log(quote);
    
        return (
            <div>
                {quote.map((a,i)=>{
                    return( 
                    <div className='box d-flex flex-wrap justify-content-center  mt-3 mx-2' > 
                       <h5 > {a.quote}</h5>
                       
                        <div className='bad d-flex flex-column justify-content-center '><h5 style={{color:"red"}}> - {a.author}</h5></div>
                        </div>

                    )    

                    
                })};
            </div>
            
            
        );
    
}

export default Quotes
