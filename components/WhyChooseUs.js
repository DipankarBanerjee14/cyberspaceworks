"use client";
import React, { useEffect, useState } from "react";
import { FaBolt, FaPaintBrush, FaFire, FaShoppingCart, FaTv, FaHome } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const WhyChooseUsWithGraph = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setCoords({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(0,150,255,0.25), transparent 60%)`,
    transition: "background-position 90ms linear, opacity 160ms ease",
  };

  // Data
  const reasons = [
    { title: "Pay anyone, anywhere", description: "Save up to 1 day per week with automated payments." },
    { title: "Get paid faster.", description: "Boost cash flow and save time with automated receivables." },
    { title: "Automate bookkeeping.", description: "Keep your books up-to-date with auto reconciliation." },
    { title: "Access working capital.", description: "Access pre-approved credit instantly, in your workflow." },
  ];

  const totals = [
    { title: "Total Income", amount: "$2100", percent: 50, color: "#ff6384" },
    { title: "Total Expense", amount: "$7400", percent: 25, color: "#36a2eb" },
    { title: "Total Bonus", amount: "$6000", percent: 68, color: "#9966ff" },
  ];

  const transactions = [
    { icon: <FaPaintBrush className="text-white" />, name: "Dribble", time: "10:07 AM", amount: "$10.67" },
    { icon: <FaFire className="text-white" />, name: "Tinder", time: "10:15 AM", amount: "$120.1" },
    { icon: <FaShoppingCart className="text-white" />, name: "Ikea", time: "9:32 AM", amount: "$112.43" },
    { icon: <FaTv className="text-white" />, name: "Netflix", time: "7:50 PM", amount: "$13.83" },
    { icon: <FaHome className="text-white" />, name: "Airbnb", time: "11:50 AM", amount: "$200.12" },
  ];

  // Charts
  const dataLine = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Income",
        data: [2000, 2500, 3000, 2800, 3200, 2900, 3100],
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.3)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Expense",
        data: [1500, 1800, 2000, 1700, 2100, 1900, 2200],
        borderColor: "#36a2eb",
        backgroundColor: "rgba(54, 162, 235, 0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: "#aaa" } },
      x: { ticks: { color: "#aaa" } },
    },
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      {/* glowing backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,150,255,0.15), transparent 70%)" }}
      />

      {/* spotlight */}
      {/* <div className="absolute inset-0 pointer-events-none" style={spotlightStyle} /> */}

      <section className="py-16 px-4 relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>

        {/* Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
            >
              <div
                className="absolute -inset-20 blur-[180px] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(circle at center, rgba(0,150,255,0.5), transparent 70%)" }}
              />
              <div className="relative z-10">
                <div className="mb-4 bg-blue-900 rounded-md inline-flex p-2">
                  <FaBolt className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-gray-300 text-sm">{r.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard */}
        <div className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,150,255,0.5)]">
          <div
            className="absolute -inset-20 blur-[180px] opacity-40 group-hover:opacity-80 transition-opacity duration-300"
            style={{ background: "radial-gradient(circle at center, rgba(0,150,255,0.6), transparent 70%)" }}
          />

          <h2 className="text-3xl font-bold text-white mb-8">Dashboard</h2>

          {/* Totals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 relative z-10">
            {totals.map((t, i) => (
              <div key={i} className="relative rounded-2xl p-6 bg-black/40 border border-white/10 text-center">
                <Doughnut
                  data={{
                    labels: ["Progress", "Remaining"],
                    datasets: [{ data: [t.percent, 100 - t.percent], backgroundColor: [t.color, "#333"], borderWidth: 0 }],
                  }}
                  options={{ cutout: "70%", plugins: { legend: { display: false }, tooltip: { enabled: false } } }}
                />
                <p className="text-gray-300 mt-4">{t.title}</p>
                <p className="text-2xl font-bold text-white">{t.amount}</p>
              </div>
            ))}
          </div>

          {/* Graph + Transactions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="md:col-span-2 p-6 rounded-2xl bg-black/40 border border-white/10">
              <h3 className="text-white mb-4">Weekly Performance</h3>
              <div className="h-64">
                <Line data={dataLine} options={optionsLine} />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
              <h3 className="text-white mb-4">Recent Transactions</h3>
              <div className="space-y-3">
                {transactions.slice(0, 4).map((tr, i) => (
                  <div key={i} className="flex items-center">
                    <div className="bg-gray-800 p-2 rounded mr-3">{tr.icon}</div>
                    <div>
                      <p className="font-semibold text-white">{tr.name}</p>
                      <p className="text-gray-400 text-sm">{tr.time}</p>
                    </div>
                    <p className="ml-auto font-semibold text-white">{tr.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUsWithGraph;
