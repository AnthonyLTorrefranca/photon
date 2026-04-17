import './InputRange.css'

export default function InputRange ({ nameTitle, value, onChange, min, max, }){

return <label className='inputContainer'>
    <section className="inputTitle">
        <h3>{nameTitle}</h3>
    </section>
    <section className="inputContainer">
        <input type="range" 
            min={min} max={max}
            value={value}
            onChange={onChange}
        />
    </section>
    <section className="valuesContainer">
        <h4>{min}%</h4>
            <strong>
                {value}
            </strong>
        <h4>{max}%</h4>
    </section>
</label>
}