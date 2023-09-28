async function follow(url,userName,token,btn){
    try{
      const response = await fetch(`${url}/social/profiles/${userName}/follow`,
      {
        method:"PUT",
        headers: {
            Authorization: `Bearer ${token}`,
      
          },
        }
      )
      const responseData = await response.json()
      if(response.ok){
        btn.disabled = true
        btn.textContent = "Followed!"
      }
      console.log(responseData)
     if(!response.ok){
      btn.textContent = responseData.errors[0].message
    
     }
      
    } catch(err){
        console.log(err)
    }

  }


  export default follow