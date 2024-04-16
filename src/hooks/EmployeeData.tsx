import axios from "axios";
import { useEffect, useState } from "react";


export default function useEmployeeData(){
    const [data,setData]=useState([{_id:"",name:"",age:null,title:"",Department:""}]);
    const [loading,setLoading]=useState(true);
    const [name,setName]=useState("");
    const [title,setTitle]=useState("");
    useEffect(()=>{
       try{
        const response=axios.get("https://samplefrontend-1.onrender.com/").then((re)=>{setData(re.data) ;setLoading(false)});
       }catch(e){
        console.log(e);
       }
    },[name,title]);
    return {
       
            data,
            loading,
            name,title,
            setData,
       
            setName,
            setTitle
      
       
       
    }
}