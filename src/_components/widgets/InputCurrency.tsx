import React, { useState } from "react"

const InputCurrency: React.FC = () => {
  const [amount, setAmount] = useState<string>()
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
    console.log('Amount:', amount)
  }
  return (
    <>
        <input style={{height: 50, width: '45%', fontSize: 30 }}
        onChange={handleAmountChange}
        value={amount} placeholder="Enter Amount" type="number"/>
    </>
  )
}

export default InputCurrency