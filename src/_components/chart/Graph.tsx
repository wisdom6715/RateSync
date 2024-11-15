import { Chart } from 'react-chartjs-2';
import style from './graph.module.css';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components for Line Chart
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  // Combine both datasets into one datasets array
  const data = {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
    datasets: [
      {
        label: '# of Votes', // First line label
        data: [1, 3, 5, 2, 7, 8, 4, 6], // First dataset
        fill: false, // No filling for the area under the line
        borderColor: 'rgba(75,192,192,1)', // Line color
        tension: 0.1, // Line tension (smoothness)
        borderWidth: 2
      },
      {
        label: '# of Currency Units', // Second line label
        data: [1, 7, 6, 8, 4, 3, 5, 2], // Second dataset
        fill: false, // No filling for the area under the line
        borderColor: 'rgba(95,52,120,1)', // Line color for the second line
        tension: 0.1, // Line tension (smoothness)
        borderWidth: 2
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className={style.chartContainer} >
      <h2>Forex</h2>
      <Chart type="line" data={data} options={options} />
    </div>
  );
};

export default LineChart;
