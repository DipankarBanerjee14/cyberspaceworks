"use client";
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export default function NewClientsChart() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
          {
            label: "New Clients",
            data: [30, 35, 40, 50, 55, 60, 65, 70, 95],
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            tension: 0.4,
            fill: true,
            pointBackgroundColor: "#3B82F6",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: false,
              text: "Number of Clients",
            },
          },
          x: {
            title: {
              display: true,
              text: "Year",
            },
          },
        },
      },
    });

    return () => chartRef.current.destroy();
  }, []);

  return <canvas ref={canvasRef} />;
}
