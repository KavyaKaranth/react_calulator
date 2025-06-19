import { useState } from "react";
function Calc(){
    const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [result, setResult] = useState(null);
  function handleSubmit(e){
    e.preventDefault();
      const a=parseFloat(number1);
      const b=parseFloat(number2);
      if(!isNaN(a) && !isNaN(b)){
        setResult({
         add:a+b,
        difference:a-b,
        product:a*b,
        dividion:b!==0 ? (a/b) : 'cannot divide by zero'
      })
      }
      else{
        setResult(null);
        alert("Please enter valid numbers.");
      }
      
  }
  return (
        <div>
        <form onSubmit={handleSubmit}>
          <input type="number" value={number1} placeholder="Enter number " onChange={(e)=>setNumber1(e.target.value)} />
          <input type="number" value={number2} placeholder="Enter number " onChange={(e)=>setNumber2(e.target.value)}/>
          <button type="submit">Calculate</button>
        </form>
        {result && (
            <div>
                <p>Addition:{result.add}</p>
                <p>Subtraction:{result.difference}</p>
                <p>Product:{result.product}</p>
                <p>Division:{result.division}</p>
             </div>    
        )}
        </div>
      );
}
export default Calc;