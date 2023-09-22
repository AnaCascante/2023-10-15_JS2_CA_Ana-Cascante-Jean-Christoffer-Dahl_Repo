import { apiUrl, authToken } from './loginFunc.js';


function fetchPosts (){
    const response = await fetch(`${url}/social/auth/register`,{
        method:"POST",
        credentials:"same-origin",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    
    }



   