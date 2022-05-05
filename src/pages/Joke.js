import React, { useEffect, useState } from 'react';

export const Joke = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("characters") === null) {
                setCharacters([{name:"No connection and no data in cache"}])
            } else {
                setCharacters(JSON.parse(localStorage.getItem("characters")));
            }
        } else {
            const ts = "1"
            const apiKey = "485898c5c7d42af2e6d03b453cf28966"
            const hash = "1bbf15d3271348736d8983fd58967f56"
            const letter = makeid()
            const URL = "http://gateway.marvel.com/v1/public/characters?nameStartsWith="+letter+"&ts="+ts+"&apikey="+apiKey+"&hash="+hash;
            fetch(URL).then(res=>res.json()).then(res=>{
                setCharacters(res.data.results);
                localStorage.setItem("characters", JSON.stringify(res.data.results));
            })
        }
    }, []);

    // Devuelve una letra al azar
    function makeid() {
        var result           = '';
        var letters       = 'abcdefghijklmnopqrstuvwxyz';
        for ( var i = 0; i < 1; i++ ) {
          result += letters.charAt(Math.floor(Math.random() * 
     letters.length));
       }
       return result;
    }


    return(
        <div>
        <h1>Marvel characters starting with random letter:</h1>
        {characters.map(({name})=> (
            <p>{name}</p>
        ))}
        </div>
    )


}