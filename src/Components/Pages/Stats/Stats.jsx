import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTimeline } from "../../../TimelineContext/TimelineContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const { timelineData } = useTimeline();

  const stats = useMemo(() => {
    let call = 0;
    let text = 0;
    let video = 0;

    timelineData.forEach((item) => {
      if (item.type === "call") call++;
      else if (item.type === "text") text++;
      else if (item.type === "video") video++;
    });

    return { call, text, video };
  }, [timelineData]);

  const data = {
    labels: ["Text", "Call", "Video"],
    datasets: [
      {
        data: [stats.text, stats.call, stats.video],
        backgroundColor: ["#8b5cf6", "#1a4731", "#3da35d"],
        hoverOffset: 12,
        borderWidth: 0,
        borderRadius: 15,
        spacing: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 30,
          color: "#6b7280",
          font: {
            size: 13,
            family: "'Inter', sans-serif",
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#111827",
        padding: 12,
        cornerRadius: 8,
      },
    },
  };

  return (
    /* Outer Container: 1600px */
    <div className="min-h-screen bg-[#f8fafc] w-full max-w-400 mx-auto px-4 md:px-8 py-10 font-sans">

      {/* Inner Content Section: 1110px */}
      <div className="max-w-277.5 mx-auto">

        <h1 className="text-3xl font-bold text-[#1e293b] mb-8 tracking-tight">
          Friendship Analytics
        </h1>

        {/* Card Structure */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

          <h3 className="text-sm font-bold text-[#143d2b] mb-8 uppercase tracking-wide">
            By Interaction Type
          </h3>

          {/* Medium Sized Chart Container */}
          <div className="relative h-87.5 md:h-105 w-full flex justify-center items-center">
            {/* Chart Width: 380px (Medium) */}
            <div className="w-full max-w-95 h-full">
              <Doughnut data={data} options={options} />
            </div>

            {/* Center Info */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-12">
              <span className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em]">Total</span>
              <span className="text-3xl font-bold text-slate-800">
                {stats.call + stats.text + stats.video}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;