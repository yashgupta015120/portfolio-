import React, { useState } from 'react';
import { Play, RotateCcw, Brain, Cpu, Check, Sparkles, CheckCircle2, XCircle } from 'lucide-react';

export const CodePlayground: React.FC = () => {
  const [activeEngine, setActiveEngine] = useState<'cpp' | 'python'>('python');

  // ==========================================
  // Python Neural Perceptron State & Presets
  // ==========================================
  const [w1, setW1] = useState(1.0);
  const [w2, setW2] = useState(1.0);
  const [bias, setBias] = useState(-1.5);
  const [inputX1, setInputX1] = useState(1);
  const [inputX2, setInputX2] = useState(1);
  const [activationType, setActivationType] = useState<'step' | 'sigmoid'>('step');

  // Perceptron calculation
  const weightedSum = inputX1 * w1 + inputX2 * w2 + bias;
  
  const computeOutput = (x1: number, x2: number, weights1: number, weights2: number, b: number, act: 'step' | 'sigmoid') => {
    const sum = x1 * weights1 + x2 * weights2 + b;
    if (act === 'step') {
      return sum >= 0 ? 1 : 0;
    } else {
      const sig = 1 / (1 + Math.exp(-sum));
      return sig >= 0.5 ? 1 : 0;
    }
  };

  const currentClass = computeOutput(inputX1, inputX2, w1, w2, bias, activationType);

  // Truth table verification for binary gates
  const truthTable = [
    { x1: 0, x2: 0, out: computeOutput(0, 0, w1, w2, bias, activationType) },
    { x1: 0, x2: 1, out: computeOutput(0, 1, w1, w2, bias, activationType) },
    { x1: 1, x2: 0, out: computeOutput(1, 0, w1, w2, bias, activationType) },
    { x1: 1, x2: 1, out: computeOutput(1, 1, w1, w2, bias, activationType) },
  ];

  // Presets
  const applyPreset = (gate: 'AND' | 'OR' | 'NAND') => {
    if (gate === 'AND') {
      setW1(1.0);
      setW2(1.0);
      setBias(-1.5);
      setActivationType('step');
    } else if (gate === 'OR') {
      setW1(1.0);
      setW2(1.0);
      setBias(-0.5);
      setActivationType('step');
    } else if (gate === 'NAND') {
      setW1(-1.0);
      setW2(-1.0);
      setBias(1.5);
      setActivationType('step');
    }
  };

  // ==========================================
  // C++ Binary Search Simulator State
  // ==========================================
  const sortedArray = [3, 7, 12, 19, 24, 31, 45, 58, 64, 79, 88, 93];
  const [target, setTarget] = useState(31);
  const [step, setStep] = useState(0);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(sortedArray.length - 1);
  const [mid, setMid] = useState(Math.floor((sortedArray.length - 1) / 2));
  const [searchStatus, setSearchStatus] = useState<'idle' | 'searching' | 'found' | 'not_found'>('idle');
  const [logs, setLogs] = useState<string[]>([
    'Ready. Click "Step Search" to trace C++ std::binary_search algorithm execution.',
  ]);

  const stepBinarySearch = () => {
    if (searchStatus === 'found' || searchStatus === 'not_found') {
      setLow(0);
      setHigh(sortedArray.length - 1);
      setMid(Math.floor((sortedArray.length - 1) / 2));
      setStep(0);
      setSearchStatus('searching');
      setLogs([`Initialized search for target ${target} in array of size ${sortedArray.length}`]);
      return;
    }

    if (low <= high) {
      const currentMid = Math.floor((low + high) / 2);
      setMid(currentMid);
      const val = sortedArray[currentMid];
      const newStep = step + 1;
      setStep(newStep);

      if (val === target) {
        setSearchStatus('found');
        setLogs((prev) => [
          ...prev,
          `[Step ${newStep}] mid=${currentMid}, arr[${currentMid}]=${val}. Target ${target} MATCHED! Time Complexity: O(log N).`,
        ]);
      } else if (val < target) {
        setLow(currentMid + 1);
        setLogs((prev) => [
          ...prev,
          `[Step ${newStep}] arr[${currentMid}]=${val} < ${target}. Eliminate left half. New low = ${currentMid + 1}.`,
        ]);
      } else {
        setHigh(currentMid - 1);
        setLogs((prev) => [
          ...prev,
          `[Step ${newStep}] arr[${currentMid}]=${val} > ${target}. Eliminate right half. New high = ${currentMid - 1}.`,
        ]);
      }
    } else {
      setSearchStatus('not_found');
      setLogs((prev) => [...prev, `Search complete: Target ${target} not present in sorted sequence.`]);
    }
  };

  const resetBinarySearch = () => {
    setLow(0);
    setHigh(sortedArray.length - 1);
    setMid(Math.floor((sortedArray.length - 1) / 2));
    setStep(0);
    setSearchStatus('idle');
    setLogs(['Simulator reset. Select target and click Step Search.']);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-[#d4af37]/25 shadow-2xl relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] tracking-widest uppercase mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>Interactive Architecture Sandbox</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Live Code &amp; Neural Simulator
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Demonstrating concrete implementation of computational algorithms in C++ and Python AI logic.
            </p>
          </div>

          {/* Engine Selector */}
          <div className="flex items-center p-1 bg-black/60 border border-white/10 rounded-xl">
            <button
              onClick={() => setActiveEngine('python')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeEngine === 'python'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Python: Neural Perceptron</span>
            </button>
            <button
              onClick={() => setActiveEngine('cpp')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeEngine === 'cpp'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>C++: Binary Search Trace</span>
            </button>
          </div>
        </div>

        {/* =================================================== */}
        {/* Mode 1: Clean, Fixed Python Neural Perceptron Model */}
        {/* =================================================== */}
        {activeEngine === 'python' && (
          <div className="mt-8 space-y-6">
            
            {/* Logic Gate Presets Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-300 font-mono">Classifier Gate Presets:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => applyPreset('AND')}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/10 text-xs font-mono text-gray-200 transition-all"
                  >
                    AND Gate
                  </button>
                  <button
                    onClick={() => applyPreset('OR')}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/10 text-xs font-mono text-gray-200 transition-all"
                  >
                    OR Gate
                  </button>
                  <button
                    onClick={() => applyPreset('NAND')}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/10 text-xs font-mono text-gray-200 transition-all"
                  >
                    NAND Gate
                  </button>
                </div>
              </div>

              {/* Activation Function Switch */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-400 font-mono">Activation:</span>
                <div className="p-0.5 bg-black/60 border border-white/10 rounded-lg flex">
                  <button
                    onClick={() => setActivationType('step')}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activationType === 'step'
                        ? 'bg-[#d4af37] text-black font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Heaviside Step
                  </button>
                  <button
                    onClick={() => setActivationType('sigmoid')}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activationType === 'sigmoid'
                        ? 'bg-[#d4af37] text-black font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Sigmoid σ
                  </button>
                </div>
              </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Synaptic Weights & Test Inputs */}
              <div className="lg:col-span-6 bg-black/35 p-6 rounded-2xl border border-white/5 space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-mono text-amber-200">
                      python_perceptron_weights.py
                    </span>
                    <span className="text-[11px] text-gray-400 font-mono">
                      Bias: {bias.toFixed(2)}
                    </span>
                  </div>

                  {/* Weight 1 Slider */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-300 mb-1.5">
                      <span>Synaptic Weight $w_1$ (Input X₁)</span>
                      <span className="font-mono text-[#d4af37] font-semibold">{w1.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="-2.5"
                      max="2.5"
                      step="0.1"
                      value={w1}
                      onChange={(e) => setW1(parseFloat(e.target.value))}
                      className="w-full accent-[#d4af37] bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Weight 2 Slider */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-300 mb-1.5">
                      <span>Synaptic Weight $w_2$ (Input X₂)</span>
                      <span className="font-mono text-[#d4af37] font-semibold">{w2.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="-2.5"
                      max="2.5"
                      step="0.1"
                      value={w2}
                      onChange={(e) => setW2(parseFloat(e.target.value))}
                      className="w-full accent-[#d4af37] bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Bias Slider */}
                  <div className="mb-5">
                    <div className="flex justify-between text-xs text-gray-300 mb-1.5">
                      <span>Neuron Threshold Bias $b$</span>
                      <span className="font-mono text-[#d4af37] font-semibold">{bias.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="-3.0"
                      max="3.0"
                      step="0.1"
                      value={bias}
                      onChange={(e) => setBias(parseFloat(e.target.value))}
                      className="w-full accent-[#d4af37] bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Active Test Input Selectors */}
                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                      Test Input Vector (X)
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">Feature X₁</label>
                        <div className="flex gap-2">
                          {[0, 1].map((val) => (
                            <button
                              key={val}
                              onClick={() => setInputX1(val)}
                              className={`flex-1 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                                inputX1 === val
                                  ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                                  : 'bg-black/50 border-white/10 text-gray-400 hover:text-white'
                              }`}
                            >
                              {val}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-gray-400 block mb-1">Feature X₂</label>
                        <div className="flex gap-2">
                          {[0, 1].map((val) => (
                            <button
                              key={val}
                              onClick={() => setInputX2(val)}
                              className={`flex-1 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                                inputX2 === val
                                  ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                                  : 'bg-black/50 border-white/10 text-gray-400 hover:text-white'
                              }`}
                            >
                              {val}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-gray-400 font-mono pt-3 border-t border-white/5 flex items-center justify-between">
                  <span>Model status: Initialized</span>
                  <span className="text-amber-200">Active weights: [{w1.toFixed(1)}, {w2.toFixed(1)}]</span>
                </div>
              </div>

              {/* Right Column: Visual Neural Architecture & Truth Verification */}
              <div className="lg:col-span-6 bg-[#0e0f14] p-6 rounded-2xl border border-[#d4af37]/30 flex flex-col justify-between space-y-6">
                
                {/* Visual Neural Node Diagram */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      Perceptron Architecture
                    </span>
                    <span className="text-xs font-mono text-[#d4af37]">
                      Net: {weightedSum.toFixed(2)}
                    </span>
                  </div>

                  <div className="relative py-4 px-3 bg-black/50 rounded-xl border border-white/5 flex items-center justify-between">
                    {/* Input Nodes */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1b1c26] border border-[#d4af37]/50 flex items-center justify-center font-mono text-xs font-bold text-white shadow-md">
                          X₁={inputX1}
                        </div>
                        <span className="text-[10px] font-mono text-gray-400">w₁: {w1.toFixed(1)}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1b1c26] border border-[#d4af37]/50 flex items-center justify-center font-mono text-xs font-bold text-white shadow-md">
                          X₂={inputX2}
                        </div>
                        <span className="text-[10px] font-mono text-gray-400">w₂: {w2.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* Central Summation & Activation Node */}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1b1c26] to-[#2a2b3d] border-2 border-[#d4af37] flex flex-col items-center justify-center shadow-lg shadow-[#d4af37]/20">
                        <span className="font-serif text-sm font-bold text-amber-200">Σ | f</span>
                        <span className="text-[9px] font-mono text-gray-400">bias={bias.toFixed(1)}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#d4af37] mt-1">Perceptron</span>
                    </div>

                    {/* Output Node */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-display font-extrabold text-base shadow-xl transition-all ${
                          currentClass === 1
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-emerald-500/30'
                            : 'bg-rose-500/20 border-rose-400 text-rose-300 shadow-rose-500/30'
                        }`}
                      >
                        {currentClass}
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 mt-1">
                        Class {currentClass}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Logic Truth Table Verification */}
                <div className="bg-black/60 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-300 mb-2.5 pb-1 border-b border-white/10">
                    <span>Truth Table Verification</span>
                    <span className="text-gray-400">4 Binary States</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                    {truthTable.map((row, idx) => {
                      const isActive = row.x1 === inputX1 && row.x2 === inputX2;
                      return (
                        <div
                          key={idx}
                          className={`p-2 rounded-lg border transition-all ${
                            isActive
                              ? 'bg-[#d4af37]/20 border-[#d4af37] text-white ring-1 ring-[#d4af37]/50'
                              : 'bg-white/5 border-white/5 text-gray-400'
                          }`}
                        >
                          <div className="text-[10px] text-gray-400 mb-0.5">
                            ({row.x1}, {row.x2})
                          </div>
                          <div
                            className={`font-bold ${
                              row.out === 1 ? 'text-emerald-400' : 'text-rose-400'
                            }`}
                          >
                            ➜ {row.out}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-black/80 to-[#191a24] border border-[#d4af37]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">
                      Current Classification
                    </span>
                    <span className="text-xs font-bold text-white">
                      {currentClass === 1
                        ? 'Activated (Neuron Fires / Output: 1)'
                        : 'Suppressed (Neuron Quiescent / Output: 0)'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Valid Model</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================== */}
        {/* Mode 2: C++ Binary Search Simulator                 */}
        {/* =================================================== */}
        {activeEngine === 'cpp' && (
          <div className="mt-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-300 font-mono">Select Target:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[12, 31, 64, 88, 99].map((val) => (
                    <button
                      key={val}
                      onClick={() => {
                        setTarget(val);
                        resetBinarySearch();
                      }}
                      className={`px-2.5 py-1 text-xs font-mono rounded-lg border ${
                        target === val
                          ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                          : 'bg-black/60 border-white/10 text-gray-300 hover:text-white'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={stepBinarySearch}
                  className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa842a] text-black font-semibold text-xs flex items-center gap-1.5 hover:brightness-110 active:scale-95 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>Step Search</span>
                </button>
                <button
                  onClick={resetBinarySearch}
                  className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
                  title="Reset Search"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Array Grid */}
            <div className="p-6 rounded-2xl bg-[#0e0f14] border border-[#d4af37]/20">
              <div className="flex justify-between items-center text-xs font-mono text-gray-400 mb-3">
                <span>std::vector&lt;int&gt; sorted_data</span>
                <span>
                  Indices: low={low}, mid={mid}, high={high}
                </span>
              </div>

              <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
                {sortedArray.map((num, idx) => {
                  const isMid = idx === mid;
                  const inRange = idx >= low && idx <= high;
                  const isMatch = num === target && searchStatus === 'found' && isMid;

                  return (
                    <div
                      key={idx}
                      className={`relative flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                        isMatch
                          ? 'bg-emerald-500/30 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400/50 scale-105'
                          : isMid
                          ? 'bg-[#d4af37]/20 border-[#d4af37] text-white ring-2 ring-[#d4af37]/40'
                          : inRange
                          ? 'bg-white/5 border-white/20 text-gray-200'
                          : 'bg-black/20 border-white/5 text-gray-600 opacity-40'
                      }`}
                    >
                      <span className="text-base font-mono font-bold">{num}</span>
                      <span className="text-[10px] text-gray-400 font-mono mt-1">[{idx}]</span>
                      {isMid && (
                        <span className="absolute -top-2 px-1.5 py-0.2 bg-[#d4af37] text-black text-[9px] font-bold rounded-sm uppercase">
                          mid
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Execution Logs Console */}
              <div className="mt-6 p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-gray-300 space-y-1 max-h-32 overflow-y-auto">
                {logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#d4af37] select-none">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
