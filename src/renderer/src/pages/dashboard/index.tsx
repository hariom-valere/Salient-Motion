import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard: React.FC = () => {
  const [mode, setMode] = useState<"live" | "playback">("live");
  const [status, setStatus] = useState("Live Idle");
  const [isRecording, setIsRecording] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [liveData, setLiveData] = useState<{ time: string; value: number }[]>([]);
  const [playbackData, setPlaybackData] = useState<{ time: string; value: number }[]>([]);
  const [position, setPosition] = useState<number>(10);
  const [temperature, setTemperature] = useState<number>(30.3);

  // Handle recording toggle
  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setShowSaveModal(true);
      setStatus("Live Idle");
    } else {
      setIsRecording(true);
      setStatus("Recording in Progress...");
    }
  };

  // Simulate live data
  useEffect(() => {
    if (mode === "live" && status === "Live Running") {
      const interval = setInterval(() => {
        setLiveData((prev) => [
          ...prev.slice(-9), // keep last 10 points
          { time: `${prev.length * 10}s`, value: Math.floor(Math.random() * 100) },
        ]);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [mode, status]);

  // Simulate playback data when file uploaded
  useEffect(() => {
    if (fileUploaded && mode === "playback") {
      const simulatedData = Array.from({ length: 10 }, (_, i) => ({
        time: `${i * 10}s`,
        value: Math.floor(Math.random() * 100),
      }));
      setPlaybackData(simulatedData);
    }
  }, [fileUploaded, mode]);

  return (
    <div className="flex flex-col w-full h-screen bg-[#0F1D17] text-white p-6 space-y-6">
      {/* Top segmented control */}
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center gap-2 bg-[#121a15] border border-[#23332c] rounded-full px-2 py-2 shadow-inner">
          <button
            onClick={() => {
              setMode("live");
              setStatus("Live Idle");
            }}
            className={`px-6 py-2 rounded-full transition-colors ${
              mode === "live" ? "bg-emerald-700 text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Live Mode
          </button>
          <button
            onClick={() => {
              setMode("playback");
              setStatus("Playback Idle");
            }}
            className={`px-6 py-2 rounded-full transition-colors ${
              mode === "playback" ? "bg-emerald-700 text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Playback Mode
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Position Control */}
        <div className="bg-[#141e1a] p-6 rounded-2xl shadow-lg space-y-8 border border-[#1e2b25]">
          <h3 className="text-white text-lg font-semibold">Position Control</h3>
          <div className="grid grid-cols-3 items-center gap-6 mt-6 mb-15">
            <input
              type="number"
              value={position}
              onChange={(e) => setPosition(Math.max(0, Math.min(50, Number(e.target.value) || 0)))}
              className="w-full h-12  rounded-xl bg-transparent border border-[#23332c] text-center text-white/90 placeholder-white/60"
            />
            <div className="text-4xl font-semibold text-center mt-10">{position}</div>
            <button
              onClick={() => setPosition(10)}
              className="justify-self-end w-full h-12 max-w-48 rounded-xl bg-emerald-700 hover:bg-emerald-600 transition-colors"
            >
              Set Home
            </button>
          </div>

          {/* Slider with custom pill handle */}
          <div className="relative select-none">
            {/* Track */}
            <div className="h-[2px] w-full bg-[#23332c]" />
            
            {/* Invisible native range for accessibility and drag */}
            <input
              aria-label="position"
              type="range"
              min={0}
              max={50}
              step={1}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer "
            />

            {/* Handle */}
            <div
              className="absolute -top-5 translate-x-[-50%]"
              style={{ left: `${(position / 50) * 100}%` }}
            >
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-700 text-white shadow-lg border border-emerald-600">
                <button
                  onClick={() => setPosition((p) => Math.max(0, p - 1))}
                  className="grid place-items-center w-5 h-5 rounded-full bg-emerald-800/60 hover:bg-emerald-800"
                >
                  <span className="-mt-[1px]">{"<"}</span>
                </button>
                <span className="min-w-[2ch] text-sm tracking-wide">{position}</span>
                <button
                  onClick={() => setPosition((p) => Math.min(50, p + 1))}
                  className="grid place-items-center w-5 h-5 rounded-full bg-emerald-800/60 hover:bg-emerald-800"
                >
                  <span className="-mt-[1px]">{">"}</span>
                </button>
              </div>
            </div>

            {/* Min/Max labels */}
            <div className="flex justify-between text-sm text-gray-300 mt-6">
              <span>0</span>
              <span>50</span>
            </div>
            {/* Mid tick label (10) */}
            <div className="absolute left-[20%] mt-1 text-gray-300 text-sm select-none">10</div>
          </div>
        </div>

        {/* Motor Speed RPM */}
        <div className="bg-[#141e1a] p-4 rounded-2xl shadow-lg border border-[#1e2b25] h-full">
          <h3 className="text-white text-lg mb-4 font-semibold">Motor Speed RPM</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mode === "live" ? liveData : playbackData.length ? playbackData : liveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#23332c" />
                <XAxis dataKey="time" stroke="#98A2B3" tickLine={false} axisLine={{ stroke: "#23332c" }} />
                <YAxis stroke="#98A2B3" tickLine={false} axisLine={{ stroke: "#23332c" }} />
                <Tooltip contentStyle={{ backgroundColor: "#1E2B25", border: "1px solid #23332c" }} />
                <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Invert Temp */}
        <div className="bg-[#141e1a] p-6 rounded-2xl shadow-lg col-span-2 border border-[#1e2b25] flex items-center">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Invert Temp</h3>
            <p className="text-6xl font-semibold tracking-tight">{temperature.toFixed(1)}°C</p>
          </div>
        </div>
      </div>

      {/* Controls / Playback */}
      <div className="bg-[#141e1a] p-4 rounded-2xl shadow-lg border border-[#1e2b25] space-y-4">
        <div className="flex items-center gap-3">
          <span className={`w-3 h-3 rounded-full ${isRecording ? "bg-red-500 animate-pulse" : "bg-green-500"}`}></span>
          <p className="text-lg font-medium">{status}</p>
        </div>
        {mode === "live" ? (
          <div className="flex gap-4">
            <button onClick={() => setStatus("Live Running")} className="px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-600">Start</button>
            <button onClick={() => setStatus("Live Idle")} className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500">Stop</button>
            <button onClick={handleRecord} className="px-6 py-3 rounded-lg bg-yellow-600 hover:bg-yellow-500">{isRecording ? "Stop Recording" : "Record"}</button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            {!fileUploaded ? (
              <div className="flex flex-col items-center justify-center h-32 w-full border-2 border-dashed border-gray-500 rounded-lg">
                <p className="mb-3 text-gray-400">Upload your recorded file</p>
                <button onClick={() => setFileUploaded(true)} className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500">Upload File</button>
              </div>
            ) : (
              <div className="flex gap-4">
                <button onClick={() => setIsPlaying(true)} className="px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-600">Play</button>
                <button onClick={() => setIsPlaying(false)} className="px-6 py-3 rounded-lg bg-yellow-600 hover:bg-yellow-500">Pause</button>
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setFileUploaded(false);
                  }}
                  className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500"
                >
                  Stop
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Save Recording Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-[#1e2b25] p-6 rounded-xl shadow-lg w-96 space-y-4">
            <h2 className="text-xl font-bold">Save Recording</h2>
            <input type="text" placeholder="Enter file name" className="w-full px-4 py-2 rounded-lg bg-[#141e1a] border border-[#23332c] text-white" />
            <div className="flex justify-end gap-4">
              <button onClick={() => setShowSaveModal(false)} className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700">Cancel</button>
              <button onClick={() => setShowSaveModal(false)} className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
