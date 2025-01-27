// import najus from "../assets/image/najus.jpg"
import axios from "axios"
import snu from "../assets/image/snu.jpg"
import { useState } from "react"

function Home (){
    const [ID, setID] = useState("")
    const [Password, setPassword] = useState("")

    const handleLogin =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/create",{
            "id": ID,
            "password": Password,
           
        },
        {
          
        }).then(()=>{
            alert("Register Successfuly")
        }).catch((error)=>{
            console.log(error)
        })
    }

    return <div  className=" bg-gradient-to-br  from-[#25a2d6] to-[rgb(235,210,127)] h-screen flex justify-center ">
<div className="sm:w-[600px] w-[350px] rounded-md h-[350px] bg-white mt-20 shadow-md">
    <div className="flex  mt-4 justify-center">
        <img className="w-[100px] h-[90px]" src={snu} alt="" />
        {/* <img className="w-[100px] " src={najus} alt="" /> */}
    </div>
    <h1 className="text-2xl text-center pt-3 font-semibold ">Voter Login</h1>
    <input value={ID} onChange={(event) => setID(event.target.value)} className=" sm:w-[460px] w-[300px] h-[50px] ml-6 sm:ml-16 border-2 border-gray-300   rounded mt-2 focus:border-blue-500 focus:outline-none p-2 transition duration-200 " type="text" placeholder="Student ID" />
    <input value={Password} onChange={(event) => setPassword(event.target.value)} className="sm:w-[460px]  w-[300px] h-[50px] ml-6 sm:ml-16 border-2 border-gray-300  rounded mt-2 focus:border-blue-500 focus:outline-none p-2 transition duration-200 " type="text" placeholder="Password" />
     <button onClick={handleLogin}  className="sm:w-[400px] w-[200px] rounded mt-3 ml-20 sm:ml-24 bg-[#25a2d6] text-white  h-[50px]">Login</button>
</div>
    </div>
}
export default Home