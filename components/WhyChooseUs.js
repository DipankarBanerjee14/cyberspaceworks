"use client";
import React, { useEffect, useState } from "react";
import {
  FaBolt,
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

      <section className="py-16 px-4 relative z-10 max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="mb-12 md:mb-0">
            <p className="text-gray-500 text-sm mb-2">
              2. Automate billing & collections
            </p>
            <div className="flex items-baseline mb-4">
              <FaBolt className="text-white text-4xl mr-2" />
              <h2 className="text-5xl font-bold text-white">Why Choose Us</h2>
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
                  {/* Assignees Top (manual) */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs mr-2">S</div>
                    <p className="text-white text-sm">Sara Kunze</p>
                    <p className="ml-4 text-gray-300 text-sm">5/8</p>
                    <div className="ml-2 w-16 bg-gray-800 rounded-full h-2">
                      <div className="h-2 rounded-full bg-orange-500" style={{ width: "46%" }} />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs mr-2">M</div>
                    <p className="text-white text-sm">Martha Sanger</p>
                    <p className="ml-4 text-gray-300 text-sm">5/8</p>
                    <div className="ml-2 w-16 bg-gray-800 rounded-full h-2">
                      <div className="h-2 rounded-full bg-red-500" style={{ width: "19%" }} />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs mr-2">B</div>
                    <p className="text-white text-sm">Brittany Lind II</p>
                    <p className="ml-4 text-gray-300 text-sm">5/8</p>
                    <div className="ml-2 w-16 bg-gray-800 rounded-full h-2">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "60%" }} />
                    </div>
                  </div>
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

              {/* Assignees Bottom (manual) */}
              <div>
                <div className="flex text-gray-400 text-sm mb-4">
                  <p className="w-1/2">Assignees</p>
                  <p className="w-1/4">Tasks</p>
                  <p className="w-1/4">Performance</p>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-1/2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs mr-3">J</div>
                    <p className="text-white">Jasmine Aisling</p>
                  </div>
                  <p className="w-1/4 text-white">0/8</p>
                  <div className="w-1/4">
                    <p className="text-yellow-500 font-bold">31%</p>
                    <div className="w-16 h-2 bg-gray-800 rounded-full mt-1">
                      <div className="h-2 rounded-full bg-yellow-500" style={{ width: "31%" }} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-1/2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs mr-3">C</div>
                    <p className="text-white">Casey Malone</p>
                  </div>
                  <p className="w-1/4 text-white">5/8</p>
                  <div className="w-1/4">
                    <p className="text-green-500 font-bold">54%</p>
                    <div className="w-16 h-2 bg-gray-800 rounded-full mt-1">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "54%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons (manual divs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
            <div className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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
                Pay anyone, <br/>anywhere
              </h3>
              <p className="text-gray-300 text-sm">
                Save up to 1 day per week with automated payments.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
            <div className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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
                Get paid <br/>faster.
              </h3>
              <p className="text-gray-300 text-sm">
                Boost cash flow and save time with automated receivables.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
            <div className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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
                Automate bookkeeping.
              </h3>
              <p className="text-gray-300 text-sm">
                Keep your books up-to-date with auto reconciliation.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
            <div className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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
                Access working <br/> capital.
              </h3>
              <p className="text-gray-300 text-sm">
                Access pre-approved credit instantly, in your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUsWithGraph;
