import { useState } from "react"
import { getPrice } from "./bill";

export default function Calc(){

    let [price,setPrice] = useState(0);
    let [units,setUnits] = useState(0);
    function unitChanged({target:{value}}){
        value = Number(value);
        setUnits(value);
        setPrice(getPrice(value));
        
    }

    return <div>
        <input type="number" onChange={unitChanged} value={units}/>
        <input type="range" min={0} max={2000} step={10} onChange={unitChanged} value={units}/>
        <input onChange={()=>{}} value={price}/>
    </div>
}