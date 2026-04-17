import React, { useState } from "react";
import './Adjustment.css'
import InputRange from '../Input Range/InputRange'

export default function Adjustment ({title: title}){
    const [adj, setAdj] = useState ({
        brightness: 100,
        saturation: 100,
        vibrance: 100,
    })
    const handleUpdate = (key, value) =>{
        setAdj(prev=>({
            ...prev,
            [key]: value,
        }))
    }
return (
<section className='adjustmentWrapper'>
    <h1>{title}</h1>
        <section className="adjustContainer">
            <InputRange nameTitle="Brightness"
                min={0} max={200}
                value={adj.brightness}
                onChange={e=>handleUpdate('brightness', e.target.value)}
            />
            <InputRange nameTitle="Saturation"
                min={0} max={200}
                value={adj.saturation}
                onChange={e=>handleUpdate('saturation', e.target.value)}
            />
            <InputRange nameTitle="Vibrance"
                min={0} max={200}
                value={adj.vibrance}
                onChange={e=>handleUpdate('vibrance', e.target.value)}
            />
    </section>

</section>
)
}