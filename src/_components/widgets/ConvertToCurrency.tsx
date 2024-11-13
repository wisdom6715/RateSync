import React, { useState } from 'react'
const SelectCurrency: React.FC = () => {
    const [convertCurrency, setConvertCurrency] = useState<string>('select')
    const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setConvertCurrency(e.target.value)
        console.log('Selected Currency:', convertCurrency)
    }
    return (
    <>
        <select name="Currency" id="currency" style={{width: '45%', height: 32}}
        onChange={handleSelection} 
        value={convertCurrency}>
        <option value="select">Select Currency</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
        </select>
    </>
  )
}
export default SelectCurrency