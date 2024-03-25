// In this file we are going to create common API or server calls. From here only we are going to connect with the server 
// All the requests like (GET, POST, PUT/PATCH, UPDATE, DELETE)

const { default: axios } = require("axios")
const BASE_URL= process.env.NEXT_PUBLIC_BASE_URL
// Let me create a class named Api

export class Api{

     static fnSendPostReq =(url, data)=>{
       return axios.post(BASE_URL+url, data)
     }

     static fnSendGetReq =(url)=>{
       return axios.get(BASE_URL+url)
     }

     static fnSendPutReq =(url, data)=>{
       return axios.putBASE_URL+(BASE_URL+url, data)
     }

     static fnSendPatchReq =(url, data)=>{
       return axios.patch(BASE_URL+url, data)
     }

     static fnSendDeletReq =(url)=>{
       return axios.delete(BASE_URL+url)
     }
}