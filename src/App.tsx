import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import useEmployeeData from './hooks/EmployeeData';

function App() {

    // const API_URL=process.env.API_URL;
    // console.log(API_URL);
    const { data,
        loading,
        name,title,setName,setTitle,setData}=useEmployeeData();
    // const [data,setData]=useState([{_id:"",name:"",age:null,title:"",Department:""}]);
    // const [name,setName]=useState("");
    // const [title,setTitle]=useState("");

    // useEffect(()=>{
       
    //     const response=axios.get("http://localhost:3000/").then((re)=>setData(re.data));
       
    // },[name,title]);

  return (
    <div>
        <div className='flex py-2 justify-center'>
            <div className='flex'>
                <div className='font-medium pr-1'>Name</div>
                
                <input className='border border-black rounded pl-1' type='text' placeholder='name' onChange={(e)=>{setName(e.target.value)}}></input>

            </div>
            <div className='flex '>
                <div className='font-medium px-1'>Title</div>
                <input className='border border-black rounded pl-1' type='text' placeholder='title' onChange={(e)=>{setTitle(e.target.value)}}></input>

            </div>

            <button className='ml-1 border border-black rounded  bg-slate-300 px-1' onClick={()=>{
                try{ axios.get(`http://localhost:3000/bulk?name=${name}&title=${title}`).then((res)=>setData(res.data));
                console.log(data);
                console.log(typeof(data));
            //  alert(data);
                }catch(e){
                    console.log(e);
                }
                console.log(data);
            
            }}>Search</button>
                       
        </div>


        {/* <div class="overflow-x-auto">
    <table class="table-auto bg-white shadow-md rounded-lg">
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">S</th>
          <th class="px-4 py-2">Column 3</th>
          <th class="px-4 py-2">Column 4</th>
          <th class="px-4 py-2">Column 5</th>
        </tr>
      </thead>
      <tbody> */}
            
        <div className="overflow-x-auto ">
            <table className="table-auto bg-white rounded-lg">
                <thead className="text-xs text-gray-700  bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Department
                        </th>
                    </tr>
                </thead>
                <tbody>
               
                    {data.map((d)=>(
                        <tr className="bg-white border-b even:bg-slate-50" key={d._id}>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                            {d.name}
                            </th>
                            <td className="px-6 py-4">
                                {d.age}
                            </td>
                            <td className="px-6 py-4">
                                {d.title}
                            </td>
                            <td className="px-6 py-4">
                                {d.Department}
                            </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}


function Filter(){
    return 
}

function AddEmployees(){

}

export default App
