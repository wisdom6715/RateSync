interface ToConvert{
   setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
   selectedCurrency: string;
}
const SelectCurrency: React.FC<ToConvert> = ({setSelectedCurrency, selectedCurrency}) => {
    const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setSelectedCurrency(e.target.value)
        console.log('Selected Currency:', selectedCurrency)
    }
    return (
    <>
      <select
        name="Currency"
        id="currency"
        style={{ width: '45%', height: 32 }}
        onChange={handleSelection}
        value={selectedCurrency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="CAD">CAD</option>
        <option value="GBP">GBP</option>
        <option value="AUD">AUD</option>
        <option value="CNY">AUD</option>
        <option value="CHF">AUD</option>
        <option value="SEK">AUD</option>
        <option value="NOK">AUD</option>
      </select>
    </>
  )
}
export default SelectCurrency