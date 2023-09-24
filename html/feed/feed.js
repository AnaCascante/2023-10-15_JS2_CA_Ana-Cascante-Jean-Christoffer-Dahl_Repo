import logIn  from "./utils/helpers/loginFunc.js";


async function fetchPosts (){
    try {
        const token = localStorage.getItem ('acces Token'); 
        const getData ={
            method:"GET",
            credentials:"same-origin",
            headers:{
                "Content-Type":"application/json",
            Authorization: 'Bearer ${token}',
        },
    };
  
const response = await fetch (apiUrl,getData); 
console.log (response); 
const json= await response.json();
console.log (json); 
    } catch (error){
        console.log (error);
    }
}



   