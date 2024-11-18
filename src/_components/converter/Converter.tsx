import style from './converter.module.css'
import InputCurrency from '../widgets/InputCurrency'
import ConvertToCurrency from '../widgets/ConvertToCurrency'
import CurrentCurrency from '../widgets/CurrentCurrency'
import { useEffect, useState } from 'react'

const Converter = () => {
  const [convertCurrency, setConvertCurrency] = useState<string>('EUR')
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD')
  const [amount, setAmount] = useState<string>('')
  const [convertedAmount, setConvertedAmount] = useState<number>(100)
  
  useEffect(() => {
    const fetchConvertCurrency = async () => {
      // Validate if amount is a valid number
      if (isNaN(parseFloat(amount)) || amount === '') {
        setConvertedAmount(0);
        return; // Exit early if the amount is invalid
      }

      if (convertCurrency !== selectedCurrency) {
        try {
          const response = await fetch(`https://api.frankfurter.app/latest?base=${selectedCurrency}&symbols=${convertCurrency}`);
          const data = await response.json();
          const result = (parseFloat(amount) * data.rates[convertCurrency]).toFixed(2);
          setConvertedAmount(parseFloat(result));
        } catch (error) {
          console.error("Error fetching conversion rate:", error);
          setConvertedAmount(0);
        }
      }
    }

    fetchConvertCurrency();
  }, [convertCurrency, selectedCurrency, amount]);

  return (
    <div className={style.converterContainer}>
      <div className={style.introContainer}>
        <h1 className={style.introText}>Currency Converter</h1>
        <p className={style.introText}>Convert currencies easily and instantly.</p>
      </div>
      <div className={style.selectContainer}>
        <CurrentCurrency selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
        <div></div>
        <ConvertToCurrency convertCurrency={convertCurrency} setConvertCurrency={setConvertCurrency} />  
      </div>
      <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <InputCurrency setAmount={setAmount} amount={amount} />
        <div className={style.convertedAmount}>
          {convertedAmount ? convertedAmount : '0.00'}
        </div>
      </div>
    </div>
  )
}

export default Converter
