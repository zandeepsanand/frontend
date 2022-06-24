import axios from "axios";


 export const registerNewUser=()=>dispatch=>{
    dispatch({type:'USER_REGISTER_REQ'})
    axios.post("/api/users/register").then(res=>{
        dispatch({type:'USER_REGISTER_SUCCESS'}).catch(err=>{
            dispatch({type:'USER_REGISTER_FAILED'})
        });
    })
}