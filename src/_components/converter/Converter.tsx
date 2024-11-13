import style from './converter.module.css'
import InputCurrency from '../widgets/InputCurrency'
import ConvertToCurrency from '../widgets/ConvertToCurrency'
import CurrentCurrency from '../widgets/CurrentCurrency'
import { useEffect } from 'react'

const Converter = () => {

  useEffect(()=>{
    function convert(from: string, to: string, amount: number): void {
      fetch(`https://api.frankfurter.app/latest?base=${from}&symbols=${to}`)
        .then((resp) => resp.json())
        .then((data) => {
          const convertedAmount = (amount * data.rates[to]).toFixed(2);
          alert(`${amount} ${from} = ${convertedAmount} ${to}`);
        });
    }
    convert('USD', 'EUR', 7);  // Example usage
  },[]);
  return (
    <div className={style.converterContainer}>
      <div className={style.introContainer}>
          <h1 className={style.introText}>Currency Converter</h1>
          <p className={style.introText}>Convert currencies easily and instantly.</p>
      </div>
      <div className={style.selectContainer}>
        <CurrentCurrency />
        <div></div>
        <ConvertToCurrency />  
      </div>
      <div  style={{marginTop: 40, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
        <InputCurrency />
        <div className={style.convertedAmount}>
        </div>
      </div>
    </div>
  )
}

export default Converter