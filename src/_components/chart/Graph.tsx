import React, { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import style from './graph.module.css';
import axios from 'axios'; // Axios for making API requests
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Line Chart
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart: React.FC = () => {
  const [currencyData, setCurrencyData] = useState<number[]>([]); // Array of numbers for USD to EUR rates
  const [dates, setDates] = useState<string[]>([]); // Array of strings for dates

  useEffect(() => {
    // Fetch data from the Frankfurter API
    axios.get(`https://api.frankfurter.app/2024-11-01..?symbols=USD`)
      .then((response) => {
        const rates = response.data.rates; // Extract rates object from response
        const baseRate: number[] = []; // Array to store USD to EUR rates
        const dateLabels: string[] = []; // Array to store dates for the X-axis

        // Loop through the rates and store USD to EUR values
        for (const date in rates) {
          if (rates[date].USD) { // Check if USD is present
            baseRate.push(rates[date].USD.EUR); // Push USD to EUR rate
            dateLabels.push(date); // Push the date
          }
        }

        // Update state with fetched rates and dates
        setCurrencyData(baseRate);
        setDates(dateLabels);
      })
      .catch((error) => {
        console.error('Error fetching currency data:', error);
      });
  }, []);

  // Combine the data for the chart
  const data = {
    labels: dates, // Dates will be used as labels on the X-axis
    datasets: [
      {
        label: 'USD to EUR Exchange Rate', // Line label
        data: currencyData, // USD to EUR data points
        fill: false, // No filling for the area under the line
        borderColor: 'rgba(75,192,192,1)', // Line color
        tension: 0.1, // Line tension (smoothness)
        borderWidth: 2
      },
      {
        label: 'USD to EUR Exchange Rate', // Line label
        data: currencyData, // USD to EUR data points
        fill: false, // No filling for the area under the line
        borderColor: 'rgba(75,192,192,1)', // Line color
        tension: 0.1, // Line tension (smoothness)
        borderWidth: 2
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false // Allow the y-axis to adjust based on data
      },
      x: {
        ticks: {
          maxRotation: 45, // Rotate X-axis labels to avoid overlap
          minRotation: 30,
        },
      }
    }
  };

  return (
    <div className={style.chartContainer}>
      <h2>Conversion Rate Graph</h2>
      <Chart type="line" data={data} options={options} />
    </div>
  );
};

export default LineChart;
