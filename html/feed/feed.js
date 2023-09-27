@import timeStamp from "../utils/helpers/timeStamp.js";
@import postComment from "../utils/helpers/postComment.js";
@import reactToPosts from "../utils/helpers/reactToPosts.js";
@import deletePost from "../utils/helpers/deletePost.js"; 
@import editPost from "../utils/helpers/editPost.js"; 

const feedContainer =document.querySelector ("#feed-container")
const confirmEditBtn = document.querySelector ("#confirmEdit")

let token 
const baseUrl = "https://api.noroff.dev/api/v1";

let userName 
token = localStorage.getItem ('bearerToken',token); 
userName = localStorage.getItem ('name',userName); 

const options = {
  method: "GET", 
  credentials: "same-origin", 
  headers: {
    "Content-Type": "application/json", 
    Authorization: `Bearer ${token}`
  }
}



async function getPosts (headerOptions){
  try {
      const response = await fetch (`${baseUrl}/social/posts?_author=true&_comments=true&_reactions=true`,headerOptions); 
      const posts= await response.json();
      console.log (posts); 
      return posts;
  } catch (error){
      console.log (error);
  }
}


async function generatePage (){
  const data = await getPosts (options)
  if (data){
    generateProfileCards (data, feedContainer, userName)
  }
}




















/*userName =  localStorage.getItem('name', userName); 
const cardContainer = document.getElementById ('cardContainer'); 

const cardTitle = document.getElementById ('cardTitle'); 
const cardText = document.getElementById ('cardText'); 
const cardImg = document.getElementById ('cardImg'); 


let token
token = localStorage.getItem('bearerToken', token);

const options ={
    method:"GET",
    credentials:"same-origin",
    headers:{
        "Content-Type":"application/json",
    Authorization: `Bearer ${token}`,
}
}





/* this is the js from hell part 2 */

/*---- structure from html for th card  --- transform this into js*/


async function createCards (post){
        const posts = await getPosts()

      posts.forEach (post => {

        
      
        }
}
       
    /** in the card- I need  
     * author.name 
     * title 
     * body 
     * comments 
     * id 
     * media 
     * reaction 
     * _count.comments 
     * _count.reaction
     * 
     * */ 

