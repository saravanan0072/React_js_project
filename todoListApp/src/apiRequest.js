//create one common function  to make api call for all operation

const apiRequest = async (url='',optionsObj=null,errMsg=null) => {
    try {
        const response = await fetch(url, optionsObj)
        if(!response.ok) throw new Error("Data was not posted in json server")
    }
    catch(err){
        errMsg = err.message
    }
    finally {
        return errMsg
    } 
}


export default apiRequest;

