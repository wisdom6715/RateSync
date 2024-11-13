import style from './converter.module.css'
import InputCurrency from '../widgets/InputCurrency'
const Converter = () => {
  return (
    <div className={style.converterContainer}>
        <div className={style.introContainer}>
            <h1 className={style.introText}>Currency Converter</h1>
            <p className={style.introText}>Convert currencies easily and instantly.</p>
        </div>
        <div className={style.selectContainer}>
          <select name="" id="" className={style.selectCurrency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="GBP">GBP</option>
          </select>
          <div></div>
          <select name="" id="" className={style.selectCurrency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="GBP">GBP</option>
          </select>
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