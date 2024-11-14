import React from 'react';

interface FromCurrencyProps {
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
  selectedCurrency: string;
}

const SelectCurrency: React.FC<FromCurrencyProps> = ({ selectedCurrency, setSelectedCurrency }) => {
  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.target.value);
    console.log('Selected Currency:', selectedCurrency);
  };

  return (
    <>
      <select
        name="Currency"
        id="currency"
        style={{ width: '45%', height: 32 }}
        onChange={handleSelection}
        value={selectedCurrency}
      >
        <option value="select">Select Currency</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
      </select>
    </>
  );
};

export default SelectCurrency;
