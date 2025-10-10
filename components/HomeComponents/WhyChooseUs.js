"use client";
import React, { useEffect, useState } from "react";
import { FaBolt } from "react-icons/fa";
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

  // === COOL GRAPH ENHANCEMENTS ===
  const createGradient = (ctx, color1, color2) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

const dataLine = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "Google",
      data: [15, 18, 20, 25, 28, 30, 33, 35, 45],
      borderColor: "#6366F1", // Indigo-500
      fill: true,
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(99,102,241,0.35)", // Indigo gradient start
          "rgba(99,102,241,0.05)"  // Indigo gradient end
        ),
      tension: 0.45,
      pointBackgroundColor: "#6366F1",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
      borderWidth: 3,
    },
    {
      label: "Social Media",
      data: [10, 11, 13, 17, 18, 21, 22, 23, 30],
      borderColor: "#38BDF8", // Sky-400
      fill: true,
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(56,189,248,0.35)", // Sky gradient start
          "rgba(56,189,248,0.05)"  // Sky gradient end
        ),
      tension: 0.45,
      pointBackgroundColor: "#38BDF8",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
      borderWidth: 3,
    },
    {
      label: "Referral",
      data: [5, 6, 7, 8, 9, 10, 11, 12, 20],
      borderColor: "#00cc99",
      fill: true,
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(0,204,153,0.4)",
          "rgba(0,204,153,0.05)"
        ),
      tension: 0.45,
      pointBackgroundColor: "#00cc99",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
      borderWidth: 3,
    },
  ],
};


  const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1800,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.1)", drawBorder: false },
      },
      x: {
        ticks: { color: "#aaa" },
        grid: { display: false },
      },
    },
    elements: {
      line: { borderJoinStyle: "round" },
    },
  };

  const CardWrapper = ({ children, className = "" }) => (
    <div
      className={`relative group rounded-2xl p-[2px] bg-gradient-to-b from-cyan-500/20 to-transparent overflow-hidden ${className}`}
    >
      <div className="relative bg-black/60 backdrop-blur-lg rounded-2xl p-6 flex flex-col gap-4 h-full transition-all duration-500 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-2/3 blur-2xl pointer-events-none"></div>
        {children}
      </div>
    </div>
  );

  const CardContent = ({ icon, title, description, className = "" }) => (
    <div className={`relative z-10 ${className}`}>
      <div className="mb-4 bg-blue-900 rounded-md inline-flex p-2 text-cyan-400">{icon}</div>
      <h3 className="text-white text-lg font-semibold mb-2 leading-tight">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );

  return (
    <main className="relative overflow-hidden" style={{ background: "#000000" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
        }}
      />

      <section className="py-16 relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Left content */}
          <div>
            <p className="text-gray-500 text-sm mb-2">2. Automate billing & collections</p>
            <div className="flex items-baseline mb-4">
              <FaBolt className="text-white text-4xl mr-2" />
              <h2 className="text-5xl font-bold text-white">Why Choose Us</h2>
            </div>
            <p className="text-gray-300 mb-8">
              Pay suppliers & employees with a click. No data entry needed. Get paid faster with automated AR.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <CardWrapper>
                <CardContent
                  icon={<FaBolt className="text-white" size={20} />}
                  title="Get paid faster."
                  description="Boost cash flow and save time with automated receivables."
                />
              </CardWrapper>

              <CardWrapper>
                <CardContent
                  icon={<FaBolt className="text-white" size={20} />}
                  title="Simplify payments."
                  description="Manage and automate all payments in one secure place."
                />
              </CardWrapper>

              <CardWrapper>
                <CardContent
                  icon={<FaBolt className="text-white" size={20} />}
                  title="Automate invoices."
                  description="Automatically generate invoices and reminders with AI."
                />
              </CardWrapper>

              <CardWrapper>
                <CardContent
                  icon={<FaBolt className="text-white" size={20} />}
                  title="Track performance."
                  description="Monitor all transactions and analytics in one dashboard."
                />
              </CardWrapper>
            </div>
          </div>

          {/* Chart Section */}
          <div className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]">
            <div
              className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-3xl font-bold text-white">Clients Acquired</p>
                </div>
              </div>

              {/* COOL GLOW GRAPH */}
              <div className="h-64 mb-8">
                <Line data={dataLine} options={optionsLine} />
              </div>

              {/* Minimal color indicators only */}
              <div className="flex justify-around mt-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#6366F1]" />
                  <p className="text-white text-sm">Google</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#38BDF8]" />
                  <p className="text-white text-sm">Social Media</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00cc99]" />
                  <p className="text-white text-sm">Referral</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-3">
          <CardWrapper>
            <CardContent
              icon={<FaBolt className="text-white" size={20} />}
              title="Pay anyone, anywhere"
              description="Save up to 1 day per week with automated payments."
            />
          </CardWrapper>

          <CardWrapper>
            <CardContent
              icon={<FaBolt className="text-white" size={20} />}
              title="Get paid faster."
              description="Boost cash flow and save time with automated receivables."
            />
          </CardWrapper>

          <CardWrapper>
            <CardContent
              icon={<FaBolt className="text-white" size={20} />}
              title="Automate bookkeeping."
              description="Keep your books up-to-date with auto reconciliation."
            />
          </CardWrapper>

          <CardWrapper>
            <CardContent
              icon={<FaBolt className="text-white" size={20} />}
              title="Access working capital."
              description="Access pre-approved credit instantly, in your workflow."
            />
          </CardWrapper>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUsWithGraph;
