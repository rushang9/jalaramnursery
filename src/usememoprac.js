import React,{useState,useEffect,useMemo} from "react";

function Memo(){

    const [add,setAdd] = useState(0);
    const [minus,setMinus] = useState(100)

    const multiplication = useMemo (function Multiply(){
        console.log("call>>>>>>>>>>")
        return add * 10;
    },[add])

   return (
    <div>
    <h1>learning memo</h1>
    {multiplication}<br/>
    <button onClick={()=> setAdd(add +1)}>addition</button>
    <span>{add}</span>
    <button onClick={()=> setMinus(minus - 1)}>substraction</button>
    <span>{minus}</span>
    </div>
   )

}

export default Memo