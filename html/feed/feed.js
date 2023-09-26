

const baseUrl = "https://api.noroff.dev/api/v1";


/*userName =  localStorage.getItem('name', userName); */
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

getPosts(options);



/* this is the js from hell part 2 */

/*---- structure from html for th card  --- transform this into js*/


async function createCards (post){
        const posts = await getPosts()

      posts.forEach (post => {

        /* this is just the "body of the card"*/
  

        const cardContainer = document.createElement ('div')
        cardContainer.id = element.id; 

        const cardImg = document.createElement ('div'); 
        const Img = document.createElement ('img'); 
        Imgsrc= element.media; 

        const cardTitle = document.createElement ('h2'); 
        cardTitle.textContent = post.title; 
      
        const cardBodyText = document.createElement ("p"); 
        cardText.textContent = card.Text;
        cardText.className = "card-text";
      



console.log (post);
        
 createCards ();

         })

      
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

/*  dette er != struktur enn profile card struktur- tatt i bruk profil Card struktur. 


const postContainer = document.createElement ("div"); 
        Container.className = "container ";

       const row = document.createElement ("div"); 
        row.className = "row";


       const colRow = document.createElement ("div"); 
       colrow.className = "row justify-content-center align-items-center text-center col";


       const card = document.createElement ("div");
        card.className = "card mb-3"
        card.style="max-width: 540px";
        card.id = element.id;

       const cardRow = document.createElement ("div"); 
        cardRow.className = "row g-0";


        const img = document.createElement ("div");
        img.className = "col-md-4";
        const cardImg = document.createElement ("img");
        cardImg.appendChild (cardImg);

      const col = document.createElement ("div"); 
       col.className = "col-md-8";

      const cardBody = document.createElement ("div"); 
       cardBody.className = "card-body";
      

      const postTitle = document.createElement ("h5"); 
        postTitle.textContent = post.title;
        postTitle.className = "card-title";

      const postText = document.createElement ("p"); 
        postText.textContent = card.Text;
        postText.className = "card-text";*/