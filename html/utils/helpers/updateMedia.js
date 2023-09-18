async function updateMedia(){

    try{
    const response = await fetch(`${baseURL}/social/profiles/${userName}/media`,values)
    const responseData = await response.json()

    return responseData;
    }catch(err){
        console.log(err)
    }


}
export default updateMedia