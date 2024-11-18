import style from './converter.module.css'
import InputCurrency from '../widgets/InputCurrency'
import ConvertToCurrency from '../widgets/ConvertToCurrency'
import CurrentCurrency from '../widgets/CurrentCurrency'
import { useEffect } from 'react'

const Converter = () => {
<<<<<<< HEAD
  const [convertCurrency, setConvertCurrency] = useState<string>('EUR')
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD')
  const [amount, setAmount] = useState<string>('')
  const [convertedAmount, setConvertedAmount] = useState<number>(100)
  useEffect(()=>{
    const fetchConvertCurrency = async(convertCurrency: string, selectedCurrency:string, amount: string)=>{
        if(convertCurrency != selectedCurrency){
          const response = await fetch(`https://api.frankfurter.app/latest?base=${selectedCurrency}&symbols=${convertCurrency}`);
          const data = await response.json();
          const convertedAmount = (parseFloat(amount) * data.rates[convertCurrency]).toFixed(2);
          setConvertedAmount(parseFloat(convertedAmount));
        }
    }
    if (convertCurrency || selectedCurrency || amount) {
      fetchConvertCurrency(convertCurrency, selectedCurrency, amount);
    }
  }, [convertCurrency, selectedCurrency, amount])
=======

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
>>>>>>> f72cf5b7031e2e7cda6e3fd61ae8a80679751318
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
<<<<<<< HEAD
          {convertedAmount? convertedAmount : '0.00'}
=======
>>>>>>> f72cf5b7031e2e7cda6e3fd61ae8a80679751318
        </div>
      </div>
    </div>
  )
}

export default Converter