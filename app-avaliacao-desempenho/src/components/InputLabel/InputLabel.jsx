export default function InputLabel({label,type, className = "",colOrRow = "col" , textareaid = false, colInput, rowInput}){

   console.log(textareaid)

    return (
        <div className= {`flex flex-${colOrRow} gap-1`}>
            <label  >{label}</label>

            { textareaid ? <textarea className={className} placeholder="Digite aqui sua justifcativa" cols = {colInput} rows = {rowInput} /> : 
                <input type={type} className={className}  />
                           
            }
        
            
            
            
        </div>
    )
}