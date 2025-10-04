"use client";
import React, { useEffect, useState } from "react";
import { FaBolt, FaSearch, FaBell, FaUserCircle, FaPaintBrush, FaFire, FaShoppingCart, FaTv, FaHome } from "react-icons/fa";
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
    setCoords({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(320px at ${coords.x}px ${coords.y}px, rgba(14,186,199,0.35), transparent 55%)`,
    transition: "background-position 90ms linear, opacity 160ms ease",
  };

  // Data for "Why Choose Us" section
  const reasons = [
    {
      title: "Pay anyone, anywhere",
      description: "Save up to 1 day per week with automated payments.",
    },
    {
      title: "Get paid faster.",
      description: "Boost cash flow and save time with automated receivables.",
    },
    {
      title: "Automate bookkeeping.",
      description: "Save time and keep your books up-to-date with auto reconciliation.",
    },
    {
      title: "Access working capital.",
      description: "Access pre-approved credit instantly, in your workflow.",
    },
  ];

  // Assignees data for pic1
  const assigneesTop = [
    { name: "Sara Kunze", percent: 45, color: "bg-yellow-500" },
    { name: "Martha Senger", percent: 19, color: "bg-red-500" },
    { name: "Brittany Lind II", percent: 60, color: "bg-green-500" },
  ];

  const assigneesBottom = [
    { name: "Jasmine Aisling", percent: 31, color: "bg-yellow-500" },
    { name: "Rae Victorie", percent: 3, color: "bg-orange-500" },
  ];

  // Chart data for pic1 graph
  const dataPic1 = {
    labels: ["4 Jan", "18 Jan", "1 Feb", "15 Feb", "1 Mar", "15 Mar"],
    datasets: [
      {
        label: "",
        data: [450, 400, 420, 350, 380, 360],
        borderColor: "#ffcc00",
        backgroundColor: "rgba(0, 191, 255, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart options for pic1
  const optionsPic1 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#fff", callback: (value) => `${value}k` },
        grid: { color: "#444" },
      },
      x: {
        ticks: { color: "#fff" },
        grid: { color: "#444" },
      },
    },
  };

  // Data for pic2 line chart
  const dataPic2 = {
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

  // Options for pic2 line chart
  const optionsPic2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#fff", callback: (value) => `${value / 1000}k` },
      },
      x: {
        ticks: { color: "#fff" },
      },
    },
  };

  // Doughnut data for totals in pic2
  const totals = [
    { title: "Total Income", amount: "$2100", percent: 50, color: "#ff6384" },
    { title: "Total Expense", amount: "$7400", percent: 25, color: "#36a2eb" },
    { title: "Total Bonus", amount: "$6000", percent: 68, color: "#9966ff" },
  ];

  // Transactions for pic2
  const transactions = [
    { icon: <FaPaintBrush className="text-white" />, name: "Dribble", time: "10:07 AM", amount: "$10.67" },
    { icon: <FaFire className="text-white" />, name: "Tinder", time: "10:15 AM", amount: "$120.1" },
    { icon: <FaShoppingCart className="text-white" />, name: "Ikea", time: "9:32 AM", amount: "$112.43" },
    { icon: <FaTv className="text-white" />, name: "Netflix", time: "7:50 PM", amount: "$13.83" },
    { icon: <FaHome className="text-white" />, name: "Airbnb", time: "11:50 AM", amount: "$200.12" },
  ];

  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#0D2D2A" }}
    >
      {/* cyan blurred background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] h-[100px] rounded-full blur-[200px] bg-[#0ebac7] opacity-100" />
      </div>

      {/* soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
        }}
      />

      {/* spotlight following cursor */}
      {/* <div
        className="absolute inset-0 pointer-events-none spotlight"
        style={spotlightStyle}
      /> */}

      {/* Why Choose Us Section like pic1 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 text-sm mb-4">2 Automate billing & collections</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold">Why Choose Us</h2>
              <p className="text-gray-400 mt-4">
                Pay suppliers & employees with a click. No data entry needed. Get paid faster with automated AR.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl p-4 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
                {/* Top assignees */}
                <div className="space-y-2 mb-4">
                  {assigneesTop.map((a, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-6 h-6 rounded-full bg-gray-500 mr-2"></div>
                      <p>{a.name}</p>
                      <p className="ml-auto text-gray-400">5/6</p>
                      <div className="mx-2 w-16 bg-gray-700 h-1 rounded">
                        <div className={`${a.color} h-1 rounded`} style={{ width: `${a.percent}%` }}></div>
                      </div>
                      <p className="text-gray-400">{a.percent}%</p>
                    </div>
                  ))}
                </div>
                {/* Performance card */}
                <div className="relative rounded-2xl p-4 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
                  <div className="flex items-center mb-2">
                    <div className="bg-yellow-500 text-black font-bold rounded-full px-2 py-1 mr-2 text-sm">JHSBSU</div>
                    <div className="bg-yellow-600 rounded-full px-3 py-1 text-sm mr-2">In Progress</div>
                    <div className="bg-blue-600 rounded-full px-3 py-1 text-sm">Due in 3 days</div>
                  </div>
                  <p className="text-4xl font-bold">67%</p>
                  <p className="text-gray-400 text-sm">efficiency based on 8 key indicators</p>
                  <p className="text-2xl font-bold mt-2">975k</p>
                  <div className="h-32 mt-2">
                    <Line data={dataPic1} options={optionsPic1} />
                  </div>
                  <p className="text-2xl font-bold mt-2">500k</p>
                  <p className="text-2xl font-bold">0.2k</p>
                  {/* Bottom assignees */}
                  <p className="text-gray-300 mt-4 mb-2">Assignees</p>
                  <div className="space-y-2">
                    {assigneesBottom.map((a, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="w-6 h-6 rounded-full bg-gray-500 mr-2"></div>
                        <p>{a.name}</p>
                        <p className="ml-auto text-gray-400">OVA</p>
                        <div className="mx-2 w-16 bg-gray-700 h-1 rounded">
                          <div className={`${a.color} h-1 rounded`} style={{ width: `${a.percent}%` }}></div>
                        </div>
                        <p className="text-gray-400">{a.percent}%</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Reasons grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-6 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group transition-transform hover:scale-105"
              >
                <div className="mb-4 bg-blue-900 rounded-md inline-flex p-2">
                  <FaBolt className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-300 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graph Section like pic2 (Dashboard) */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto relative rounded-2xl p-6 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
          {/* Top bar */}
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <div className="ml-auto flex items-center space-x-4">
              {/* <div className="bg-gray-900 rounded-md px-4 py-2 flex items-center w-48">
                <FaSearch className="text-gray-400 mr-2" />
                <input placeholder="Q Search" className="bg-transparent outline-none text-white w-full" />
              </div> */}
              {/* <FaUserCircle className="text-pink-300" size={32} />
              <div className="relative">
                <FaBell className="text-gray-400" size={24} />
                <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></div>
              </div> */}
            </div>
          </div>
          {/* Totals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {totals.map((t, i) => (
              <div key={i} className="relative rounded-2xl p-4 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
                <p className="text-gray-300 mb-2">{t.title}</p>
                <div className="relative mx-auto w-32 h-32">
                  <Doughnut
                    data={{
                      labels: ["Progress", "Remaining"],
                      datasets: [{ data: [t.percent, 100 - t.percent], backgroundColor: [t.color, "#444"], borderWidth: 0 }],
                    }}
                    options={{ cutout: "70%", plugins: { legend: { display: false }, tooltip: { enabled: false } }, maintainAspectRatio: false }}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <p className="text-2xl font-bold">{t.amount}</p>
                    <p className="text-sm text-gray-300">{t.percent}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              {/* Line graph */}
              <div className="relative rounded-2xl p-4 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <div className="w-3 h-3 bg-pink-500 mr-2 rounded-full"></div>
                    <p className="text-gray-300">Income</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 mr-2 rounded-full"></div>
                    <p className="text-gray-300">Expense</p>
                  </div>
                  <select className="ml-auto bg-transparent text-white border-none">
                    <option>Last week</option>
                  </select>
                </div>
                <div className="h-48">
                  <Line data={dataPic2} options={optionsPic2} />
                </div>
              </div>
            </div>
            <div>
              {/* My Cards */}
              <div className="relative rounded-2xl p-4 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
                <div className="flex justify-between">
                  <p className="font-semibold">My Cards</p>
                  <p>...</p>
                </div>
                <p className="text-sm mt-4">Balance</p>
                <p className="text-2xl font-bold">$13.564</p>
              </div>
            </div>
          </div>
          {/* Bottom row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="md:col-span-2 relative rounded-2xl p-4 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Recent Transactions</p>
                <p>...</p>
              </div>
              <p className="text-gray-300 mb-2">Today</p>
              <div className="space-y-3">
                {transactions.slice(0, 3).map((tr, i) => (
                  <div key={i} className="flex items-center">
                    <div className="bg-gray-800 p-2 rounded mr-3">{tr.icon}</div>
                    <div>
                      <p className="font-semibold">{tr.name}</p>
                      <p className="text-gray-400 text-sm">{tr.time}</p>
                    </div>
                    <p className="ml-auto font-semibold">{tr.amount}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-4 mb-2">Yesterday</p>
              <div className="space-y-3">
                {transactions.slice(3).map((tr, i) => (
                  <div key={i} className="flex items-center">
                    <div className="bg-gray-800 p-2 rounded mr-3">{tr.icon}</div>
                    <div>
                      <p className="font-semibold">{tr.name}</p>
                      <p className="text-gray-400 text-sm">{tr.time}</p>
                    </div>
                    <p className="ml-auto font-semibold">{tr.amount}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl p-4 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
                <p className="text-gray-300 mb-2">Investment</p>
                <p className="text-2xl font-bold">$12000</p>
                <p className="text-green-500">+5%</p>
                <div className="bg-gray-700 h-1 rounded mt-2">
                  <div className="bg-purple-500 h-1 rounded" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="relative rounded-2xl p-4 bg-black/40 backdrop-blur-sm border border-white/10 overflow-hidden group">
                <p className="text-gray-300 mb-2">Deposit</p>
                <p className="text-2xl font-bold">$19600</p>
                <p className="text-green-500">14%</p>
                <div className="bg-gray-700 h-1 rounded mt-2">
                  <div className="bg-pink-500 h-1 rounded" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUsWithGraph;