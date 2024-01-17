import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

 

const BarChart = ({data}) => {
    const options = {
        responsive: true,
        scales: {
            x: {
              ticks: {
                color: "#0A3F67", 
              },
            },
            y: {
              ticks: {
                color: "#0A3F67", 
              },
            },
          },
        plugins: {
          legend: {
            position: "top",
            labels: {
              color: "#0A3F67",
            },
          },
        },
      };
  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart