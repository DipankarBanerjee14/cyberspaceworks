"use client";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Chart from "chart.js/auto";

export default function Dashboard() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Spotlight effect
    setCoords({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);

    // Chart.js setup
    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Income",
            data: [1200, 1000, 1300, 1100, 1400, 1200, 1500],
            borderColor: "#EC4899",
            backgroundColor: "rgba(236, 72, 153, 0.3)",
            pointBackgroundColor: "#EC4899",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            fill: false,
            tension: 0.4,
            borderWidth: 2,
          },
          {
            label: "Expense",
            data: [2500, 1500, 2000, 1800, 2200, 1700, 1900],
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.3)",
            pointBackgroundColor: "#3B82F6",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            fill: false,
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: true,
            grid: { display: false },
            ticks: {
              color: "#9CA3AF",
              font: { size: 12 },
            },
          },
          y: {
            display: false,
            beginAtZero: true,
          },
        },
        elements: {
          point: {
            radius: 4,
            hoverRadius: 6,
          },
        },
      },
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);



  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <main
        className="relative overflow-hidden p-6"
        style={{ background: "#000000" }}
      >
        {/* Soft global teal glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
          }}
        />

        {/* Soft global blue glow */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none" />

     
       

        {/* Dashboard Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Top Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
  {[
    { title: "Years of Experience", value: "8+", color: "cyan" },
    { title: "Completed Projects", value: "500+", color: "blue" },
    { title: "5★ Reviews", value: "100+", color: "purple" },
    { title: "Countries Served", value: "5+", color: "emerald" },
  ].map((item, i) => (
    <div
      key={i}
      className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
    >
      {/* Glow background */}
      <div
        className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            item.color === "cyan"
              ? "radial-gradient(circle at center, rgba(34,211,238,0.6), transparent 70%)"
              : item.color === "blue"
              ? "radial-gradient(circle at center, rgba(59,130,246,0.6), transparent 70%)"
              : item.color === "purple"
              ? "radial-gradient(circle at center, rgba(168,85,247,0.6), transparent 70%)"
              : "radial-gradient(circle at center, rgba(16,185,129,0.6), transparent 70%)",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10 text-center">
        <p className="text-gray-400 mb-2 tracking-wide">{item.title}</p>
        <span
          className={`text-4xl font-extrabold bg-gradient-to-r ${
            item.color === "cyan"
              ? "from-cyan-400 to-cyan-600"
              : item.color === "blue"
              ? "from-blue-400 to-blue-600"
              : item.color === "purple"
              ? "from-purple-400 to-purple-600"
              : "from-emerald-400 to-emerald-600"
          } bg-clip-text text-transparent`}
        >
          {item.value}
        </span>
      </div>
    </div>
  ))}
</div>


          {/* Chart + Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Chart Card */}
            <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
              <div
                className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex justify-between mb-4">
                  <span className="text-white">Income</span>
                  <span className="text-white">Expense</span>
                </div>
                <div className="h-40 flex items-end">
                  <canvas ref={canvasRef} className="w-full h-full"></canvas>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            {/* Transactions Card */}
            <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
              <div
                className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">My Cards</h2>
                  <span className="text-gray-400">⋮</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl mb-4 relative">
                  <p className="text-gray-200">Balance</p>
                  <p className="text-2xl font-bold text-white">$13,564</p>
                  <div className="absolute bottom-2 right-2 text-gray-300">∞</div>
                </div>
                <div className="mb-4">
                  <select className="bg-black/60 backdrop-blur-xl border border-white/10 w-full p-2 rounded-xl text-white focus:outline-none focus:border-blue-500/50">
                    <option>Last week</option>
                  </select>
                </div>
                <h3 className="text-gray-400 mb-2">Recent Transactions</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { name: "Drinkable", amount: "$10.67" },
                    { name: "Tinder", amount: "$12.01" },
                    { name: "Ikea", amount: "$112.43" },
                    { name: "Netflix", amount: "$13.63" },
                    { name: "Airbnb", amount: "$200.12" },
                  ].map((tx, i) => (
                    <div
                      key={i}
                      className="flex justify-between py-1 border-b border-white/10 last:border-b-0"
                    >
                      <span className="text-gray-300">{tx.name}</span>
                      <span className="text-white font-semibold">{tx.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Investment + Deposit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Investment", value: "$12000", percent: "+5%", color: "blue", width: "50%" },
              { title: "Deposit", value: "$19600", percent: "+14%", color: "pink", width: "70%" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
              >
                <div
                  className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
                  }}
                />
                <div className="relative z-10">
                  <p className="text-gray-400 mb-2">{item.title}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-white">{item.value}</span>
                    <span className="text-green-400 font-semibold">{item.percent}</span>
                  </div>
                  <div className="w-full bg-black/40 h-2 rounded-xl overflow-hidden">
                    <div
                      className={`h-2 rounded-xl bg-gradient-to-r ${
                        item.color === "blue"
                          ? "from-blue-500 to-blue-600"
                          : "from-pink-500 to-pink-600"
                      }`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
