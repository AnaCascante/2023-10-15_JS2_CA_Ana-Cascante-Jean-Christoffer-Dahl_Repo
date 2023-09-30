





export default filterPosts

/* we can sort with the parameters sort - sortOrder (by default desc, can use asc to sort ascending). 

/auction/listings?_tag=my_tag&_active=true-- this will filter by _tag. 

/auction/listings/<id> ---- returns a single listing. 


async function filterPostByProperty (posts){

  const filteredPosts = posts.filter(post => post._tag === "something")
  return filteredPosts

}

select.addEventListener("change",filterPostByProperty(data))


search.addEventListener("submit",filterPostByProperty(data))


*/