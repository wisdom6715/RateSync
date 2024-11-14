import style from './converter.module.css'
import InputCurrency from '../widgets/InputCurrency'
import ConvertToCurrency from '../widgets/ConvertToCurrency'
import CurrentCurrency from '../widgets/CurrentCurrency'
import { useEffect, useState } from 'react'

const Converter = () => {
  const [convertCurrency, setConvertCurrency] = useState<string>('From')
  const [selectedCurrency, setSelectedCurrency] = useState<string>('To')
  const [amount, setAmount] = useState<string>('')
  const [convertedAmount, setConvertedAmount] = useState<number>()
  useEffect(()=>{
    const fetchConvertCurrency = async(convertCurrency: string, selectedCurrency:string, amount: string)=>{
        const response = await fetch(`https://api.frankfurter.app/latest?base=${selectedCurrency}&symbols=${convertCurrency}`);
        const data = await response.json();
        const convertedAmount = (parseInt(amount) * data.rates[convertCurrency]).toFixed(2);
        setConvertedAmount(Math.floor(parseInt(convertedAmount)));
    }
    if (convertCurrency && selectedCurrency && amount) {
      fetchConvertCurrency(convertCurrency, selectedCurrency, amount);
    }
  }, [convertCurrency, selectedCurrency, amount])
  return (
    <div className={style.converterContainer}>
      <div className={style.introContainer}>
          <h1 className={style.introText}>Currency Converter</h1>
          <p className={style.introText}>Convert currencies easily and instantly.</p>
      </div>
      <div className={style.selectContainer}>
        <CurrentCurrency  selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
        <div></div>
        <ConvertToCurrency convertCurrency={convertCurrency} setConvertCurrency={setConvertCurrency}/>  
      </div>
      <div  style={{marginTop: 40, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
        <InputCurrency setAmount={setAmount} amount={amount}/>
        <div className={style.convertedAmount}>
          {convertedAmount}
        </div>
      </div>
    </div>
  )
}

export default Converter