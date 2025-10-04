"use client";
import React, { useEffect, useState } from "react";
import {
  FaBolt,
  FaBrain,
  FaDatabase,
  FaQuestionCircle,
  FaEnvelope,
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
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
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
    background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(0,150,255,0.2), transparent 60%)`,
    transition: "background-position 90ms linear, opacity 160ms ease",
  };

  // Data for top chart
  const dataLine = {
    labels: ["4 Jan", "18 Jan", "1 Feb", "16 Feb", "1 Mar", "15 Mar"],
    datasets: [
      {
        label: "Series 1",
        data: [35, 38, 40, 37, 39, 35],
        borderColor: "#ffd700",
        backgroundColor: "rgba(255, 215, 0, 0.3)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#ffd700",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
      {
        label: "Series 2",
        data: [25, 28, 26, 30, 28, 32],
        borderColor: "#00bfff",
        backgroundColor: "rgba(0, 191, 255, 0.3)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#00bfff",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
        ticks: {
          color: "#aaa",
          stepSize: 12.5,
          callback: (value) => `$${value}k`,
        },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      x: { 
        ticks: { color: "#aaa" },
        grid: { display: false },
      },
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
      },
    },
  };

  const reasons = [
    { title: "Pay anyone, anywhere", description: "Save up to 1 day per week with automated payments." },
    { title: "Get paid faster.", description: "Boost cash flow and save time with automated receivables." },
    { title: "Automate bookkeeping.", description: "Keep your books up-to-date with auto reconciliation." },
    { title: "Access working capital.", description: "Access pre-approved credit instantly, in your workflow." },
  ];

  const assigneesTop = [
    { name: "Sara Kunze", tasks: "5/8", percent: 46, color: "orange" },
    { name: "Martha Sanger", tasks: "5/8", percent: 19, color: "red" },
    { name: "Brittany Lind II", tasks: "5/8", percent: 60, color: "green" },
  ];

  const assigneesBottom = [
    { name: "Jasmine Aisling", tasks: "0/8", percent: 31, color: "yellow" },
    { name: "Casey Malone", tasks: "5/8", percent: 54, color: "green" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: "#000000" }}>
      {/* Soft global teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
        }}
      />

      {/* Spotlight following cursor */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={spotlightStyle}
      /> */}

      <section className="py-16 px-4 relative z-10 max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="mb-12 md:mb-0">
            <p className="text-gray-500 text-sm mb-2">
              2. Automate billing & collections
            </p>
            <div className="flex items-baseline mb-4">
              <FaBolt className="text-white text-4xl mr-2" />
              <h2 className="text-5xl font-bold text-white">
                Why Choose Us
              </h2>
            </div>
            <p className="text-gray-300">
              Pay suppliers & employees with a click. No data entry needed. Get
              paid faster with automated AR.
            </p>
          </div>

          {/* Chart Card */}
          <div className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
            <div
              className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              {/* Header */}
              <div className="flex justify-between mb-8">
                <div>
                  <div className="flex items-center">
                    <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center text-black font-bold text-lg">
                      J
                    </div>
                    <span className="ml-2 text-white font-bold text-xl">
                      JHSBSJ
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <button className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm">
                      In Progress
                    </button>
                    <span className="ml-4 text-blue-300 text-sm">
                      Due in 3 days
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  {assigneesTop.map((a, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs mr-2">
                        {a.name.split(" ")[0][0]}
                      </div>
                      <p className="text-white text-sm">{a.name}</p>
                      <p className="ml-4 text-gray-300 text-sm">{a.tasks}</p>
                      <div className="ml-2 w-16 bg-gray-800 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-${a.color}-500`}
                          style={{ width: `${a.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Efficiency */}
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-5xl font-bold text-white">67%</p>
                  <p className="text-gray-400 text-sm">
                    efficiency based on 8 key indicators
                  </p>
                </div>
                <p className="text-3xl font-bold text-white">$75k</p>
              </div>

              {/* Graph */}
              <div className="h-64 mb-8">
                <Line data={dataLine} options={optionsLine} />
              </div>

              {/* Assignees Bottom */}
              <div>
                <div className="flex text-gray-400 text-sm mb-4">
                  <p className="w-1/2">Assignees</p>
                  <p className="w-1/4">Tasks</p>
                  <p className="w-1/4">Performance</p>
                </div>
                {assigneesBottom.map((a, i) => (
                  <div key={i} className="flex items-center mb-4">
                    <div className="w-1/2 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs mr-3">
                        {a.name.split(" ")[0][0]}
                      </div>
                      <p className="text-white">{a.name}</p>
                    </div>
                    <p className="w-1/4 text-white">{a.tasks}</p>
                    <div className="w-1/4">
                      <p className={`text-${a.color}-500 font-bold`}>
                        {a.percent}%
                      </p>
                      <div className="w-16 h-2 bg-gray-800 rounded-full mt-1">
                        <div
                          className={`h-2 rounded-full bg-${a.color}-500`}
                          style={{ width: `${a.percent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {reasons.map((r, i) => (
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
                <div className="mb-4 bg-blue-900 rounded-md inline-flex p-2">
                  <FaBolt className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-gray-300 text-sm">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUsWithGraph;