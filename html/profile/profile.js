const selectors =
 [
    "#username",
    "#followingCount",
    "#followersCount"
]
const selected = selectors.map(value => document.querySelector(value))

const [
    profileName,
    followingCount,
    followersCount
] = selected


let token
let userName
token =  localStorage.getItem('bearerToken', token);
userName =  localStorage.getItem('name', userName);

const baseURL = "https://api.noroff.dev/api/v1";

const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

async function getProfile(url){

    try{
    const response = await fetch(`${url}/social/profiles/${userName}`,options)

    const responseData = await response.json()




    console.log(responseData)

    profileName.textContent = responseData.name
    followingCount.textContent = responseData._count.following
    followersCount.textContent = responseData._count.followers






    
    return responseData;
    }catch(err){
        console.log(err)
    }


}
getProfile(baseURL)
