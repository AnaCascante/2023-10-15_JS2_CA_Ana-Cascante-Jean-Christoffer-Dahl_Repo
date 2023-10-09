export default function searchPosts(query,getPosts,options,feedContainer,generateProfileCards) {
    getPosts(options).then(data => {
        const filteredData = data.filter(post => 
            post.author?.name.toLowerCase().includes(query) ||
            post.title.toLowerCase().includes(query) ||
            post.body.toLowerCase().includes(query)
        );
  
        // Clear the existing posts from the container before displaying filtered results
        feedContainer.textContent = '';
  
        generateProfileCards(filteredData, feedContainer);
    });
  }
  