const baseUrl = "https://api.noroff.dev/api/v1";

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


async function createCards (){
        const posts = await getPosts()

      posts.forEach (post => {

      const postContainer = document.createElement ("div"); 
        Container.className = "container ";

       const row = document.createElement ("div"); 
        row.className = "row";


       const colRow = document.createElement ("div"); 
       colrow.className = "row justify-content-center align-items-center text-center col";


       const card = document.createElement ("div");
        card.className = "card mb-3"
        card.style="max-width: 540px";

       const cardRow = document.createElement ("div"); 
        cardRow.className = "row g-0";


        const img = document.createElement ("div");
        img.className = "col-md-4";
        const userImg = document.createElement ("img");
        userImg.src = element.author.avatar?? "../../img/lion2.jpg"; 
        userImg.className="img-fluid rounded-start";
        img.appendChild (userImg);

      const col = document.createElement ("div"); 
       col.className = "col-md-8";

      const cardBody = document.createElement ("div"); 
       cardBody.className = "card-body";

      const postTitle = document.createElement ("h5"); 
        postTitle.textContent = post.title;
        postTitle.className = "card-title";

      const postText = document.createElement ("p"); 
        postText.textContent = card.Text;
        postText.className = "card-text";

    
         })
        }
       
