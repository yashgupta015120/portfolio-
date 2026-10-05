import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sparkles, CheckCircle2, Upload, RotateCcw, Link2, Sliders, Image as ImageIcon } from 'lucide-react';

interface CircularProfileProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showStatusBadge?: boolean;
  className?: string;
  onPhotoChange?: (dataUrl: string | null) => void;
}

export const CircularProfile: React.FC<CircularProfileProps> = ({
  size = 'xl',
  showStatusBadge = true,
  className = '',
  onPhotoChange,
}) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [zoom, setZoom] = useState(115);
  const [panY, setPanY] = useState(0);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('yash_gupta_pfp');
      if (savedPhoto) {
        setCustomPhoto(savedPhoto);
        if (onPhotoChange) onPhotoChange(savedPhoto);
      }
      const savedZoom = localStorage.getItem('yash_gupta_zoom');
      if (savedZoom) setZoom(Number(savedZoom));
      const savedPan = localStorage.getItem('yash_gupta_pan');
      if (savedPan) setPanY(Number(savedPan));
    } catch {
      // storage quota
    }
  }, [onPhotoChange]);

  // Global paste handler: allows Ctrl+V / Cmd+V
  useEffect(() => {
    const handleGlobalPaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            processFile(file);
            showToast('Photo pasted from clipboard!');
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handleGlobalPaste);
    return () => window.removeEventListener('paste', handleGlobalPaste);
  }, []);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
      showToast('Photo updated!');
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setCustomPhoto(result);
      try {
        localStorage.setItem('yash_gupta_pfp', result);
      } catch {
        // storage quota fallback
      }
      if (onPhotoChange) onPhotoChange(result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      processFile(file);
      showToast('Photo updated!');
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrlInput.trim()) return;
    setCustomPhoto(imageUrlInput.trim());
    try {
      localStorage.setItem('yash_gupta_pfp', imageUrlInput.trim());
    } catch {
      // quota
    }
    if (onPhotoChange) onPhotoChange(imageUrlInput.trim());
    showToast('Photo loaded!');
    setImageUrlInput('');
  };

  const resetToDefault = () => {
    setCustomPhoto(null);
    setZoom(115);
    setPanY(0);
    try {
      localStorage.removeItem('yash_gupta_pfp');
      localStorage.removeItem('yash_gupta_zoom');
      localStorage.removeItem('yash_gupta_pan');
    } catch {
      // quota
    }
    if (onPhotoChange) onPhotoChange(null);
    showToast('Reset to default.');
  };

  const updateZoom = (val: number) => {
    setZoom(val);
    try {
      localStorage.setItem('yash_gupta_zoom', val.toString());
    } catch {
      // ignore
    }
  };

  const updatePan = (val: number) => {
    setPanY(val);
    try {
      localStorage.setItem('yash_gupta_pan', val.toString());
    } catch {
      // ignore
    }
  };

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-20 h-20',
    lg: 'w-36 h-36',
    xl: 'w-56 h-56 sm:w-64 sm:h-64',
  }[size];

  return (
    <>
      <div className={`relative flex flex-col items-center select-none ${className}`}>
        {notification && (
          <div className="absolute -top-10 z-50 px-3 py-1 rounded-full bg-[#181922] border border-[#d4af37]/60 text-white text-xs font-mono shadow-lg animate-in fade-in duration-150">
            {notification}
          </div>
        )}

        {/* Minimalist Profile Ring */}
        <div
          className="relative inline-block group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          {/* Refined Hairline Ring */}
          <div
            className={`${sizeClasses} relative rounded-full p-[2px] bg-gradient-to-b from-[#d4af37]/60 via-white/10 to-[#d4af37]/30 cursor-pointer overflow-hidden transition-all duration-300 group-hover:border-[#d4af37] ${
              isDragging ? 'ring-2 ring-[#d4af37]' : ''
            }`}
            onClick={() => setShowModal(true)}
            role="button"
            aria-label="View or update profile photo"
            title="Click to view photo, zoom, or select 20260827_153252.jpg"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#101116] relative flex items-center justify-center">
              {customPhoto ? (
                <img
                  src={customPhoto}
                  alt="Saubhagya (Yash) Gupta"
                  className="w-full h-full object-cover transition-transform duration-100"
                  style={{
                    transform: `scale(${zoom / 100}) translateY(${panY}%)`,
                  }}
                />
              ) : (
                /* Ultra-clean detailed likeness matching 20260827_153252.jpg */
                <div className="w-full h-full relative bg-[#111218] flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full object-cover"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient id="minimalStudio" cx="50%" cy="30%" r="65%">
                        <stop offset="0%" stopColor="#252732" />
                        <stop offset="60%" stopColor="#12131a" />
                        <stop offset="100%" stopColor="#0b0c10" />
                      </radialGradient>
                      <linearGradient id="skinMinimal" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#dca87d" />
                        <stop offset="50%" stopColor="#ca8c5b" />
                        <stop offset="100%" stopColor="#a96b3d" />
                      </linearGradient>
                      <linearGradient id="shirtMinimal" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22232c" />
                        <stop offset="100%" stopColor="#0d0e13" />
                      </linearGradient>
                    </defs>

                    <circle cx="100" cy="100" r="100" fill="url(#minimalStudio)" />
                    <circle cx="100" cy="100" r="99" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />

                    {/* Torso & Shirt */}
                    <path
                      d="M32 188 C36 142, 58 130, 100 130 C142 130, 164 142, 168 188 Z"
                      fill="url(#shirtMinimal)"
                    />
                    
                    {/* Open collar */}
                    <path
                      d="M74 132 L100 160 L126 132 L112 129 L100 147 L88 129 Z"
                      fill="#181921"
                      stroke="#323444"
                      strokeWidth="1.5"
                    />
                    <path d="M89 130 L100 150 L111 130 Z" fill="url(#skinMinimal)" />
                    <circle cx="100" cy="170" r="1.5" fill="#555869" />
                    <circle cx="100" cy="184" r="1.5" fill="#555869" />

                    {/* Neck */}
                    <rect x="86" y="102" width="28" height="34" rx="7" fill="url(#skinMinimal)" />

                    {/* Head */}
                    <ellipse cx="100" cy="82" rx="34" ry="41" fill="url(#skinMinimal)" />

                    {/* Styled Hair */}
                    <path
                      d="M64 77 C62 53, 73 38, 100 38 C127 38, 138 53, 136 77 C132 67, 127 57, 100 57 C73 57, 68 67, 64 77 Z"
                      fill="#121316"
                    />

                    {/* Eyebrows */}
                    <path d="M75 69 Q84 66 93 69" stroke="#141518" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <path d="M107 69 Q116 66 125 70" stroke="#141518" strokeWidth="3" strokeLinecap="round" fill="none" />

                    {/* Eyes */}
                    <ellipse cx="84" cy="77" rx="5.2" ry="3.8" fill="#141518" />
                    <ellipse cx="116" cy="77" rx="5.2" ry="3.8" fill="#141518" />
                    <circle cx="85" cy="76" r="1.3" fill="#ffffff" />
                    <circle cx="117" cy="76" r="1.3" fill="#ffffff" />

                    {/* Nose */}
                    <path d="M100 73 L97 89 Q100 92 103 89" stroke="#87512b" strokeWidth="2" strokeLinecap="round" fill="none" />

                    {/* Neat Mustache */}
                    <path
                      d="M86 93 Q94 91 100 93 Q106 91 114 93 Q100 99 86 93 Z"
                      fill="#141518"
                    />

                    {/* Smile with teeth */}
                    <path
                      d="M88 99 Q100 110 112 99"
                      stroke="#7a4220"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path d="M91 100 Q100 106 109 100 Z" fill="#ffffff" />
                  </svg>
                </div>
              )}

              {/* Minimal Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center text-white transition-opacity duration-200 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Camera className="w-5 h-5 text-[#d4af37] mb-1" />
                <span className="text-[10px] font-mono tracking-wider uppercase text-amber-200">
                  Update Photo
                </span>
              </div>
            </div>
          </div>

          {/* Minimalist Status Indicator */}
          {showStatusBadge && size === 'xl' && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 bg-[#0f1015] border border-white/10 rounded-full shadow-md whitespace-nowrap z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-gray-300">
                Available for Internships
              </span>
            </div>
          )}
        </div>

        {/* Minimalist Quick Select Trigger */}
        {size === 'xl' && (
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-[11px] font-mono text-gray-400 hover:text-[#d4af37] transition-colors underline decoration-dotted underline-offset-4"
            >
              {customPhoto ? 'Change photo file' : 'Select 20260827_153252.jpg'}
            </button>
          </div>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Minimalist Zoom & Photo Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-sm bg-[#101117] border border-white/10 rounded-2xl p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-display font-semibold text-sm text-white">
                Profile Photo Settings
              </span>
              <button
                onClick={() => setShowModal(false)}
                className="w-6 h-6 rounded flex items-center justify-center text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="py-4 flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full p-[2px] border border-[#d4af37]/60 overflow-hidden mb-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                  {customPhoto ? (
                    <img
                      src={customPhoto}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      style={{
                        transform: `scale(${zoom / 100}) translateY(${panY}%)`,
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-3">
                      <ImageIcon className="w-6 h-6 text-[#d4af37] mb-1 opacity-70" />
                      <span className="text-[11px] text-gray-400">Default likeness</span>
                    </div>
                  )}
                </div>
              </div>

              {customPhoto && (
                <div className="w-full space-y-2 mb-3 bg-black/30 p-2.5 rounded-lg border border-white/5 text-xs">
                  <div>
                    <div className="flex justify-between text-gray-400 mb-1">
                      <span>Zoom</span>
                      <span className="font-mono text-[#d4af37]">{zoom}%</span>
                    </div>
                    <input
                      type="range"
                      min="70"
                      max="200"
                      value={zoom}
                      onChange={(e) => updateZoom(Number(e.target.value))}
                      className="w-full accent-[#d4af37] bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-gray-400 mb-1">
                      <span>Vertical Shift</span>
                      <span className="font-mono text-[#d4af37]">{panY}%</span>
                    </div>
                    <input
                      type="range"
                      min="-50"
                      max="50"
                      value={panY}
                      onChange={(e) => updatePan(Number(e.target.value))}
                      className="w-full accent-[#d4af37] bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2 w-full">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2 px-3 rounded-lg bg-[#d4af37] text-black font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-[#e5c18a] transition-colors"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Choose 20260827_153252.jpg</span>
                </button>

                <form onSubmit={handleUrlSubmit} className="flex gap-1.5">
                  <input
                    type="url"
                    value={imageUrlInput}
                    onChange={(e) => setImageUrlInput(e.target.value)}
                    placeholder="Or paste direct image URL..."
                    className="flex-1 px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#d4af37]"
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1.5 rounded-lg bg-white/10 text-white text-xs hover:bg-white/20"
                  >
                    <Link2 className="w-3 h-3" />
                  </button>
                </form>

                {customPhoto && (
                  <button
                    onClick={resetToDefault}
                    className="py-1.5 text-xs text-gray-400 hover:text-white"
                  >
                    Reset to Default
                  </button>
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="text-xs text-[#d4af37] font-medium"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
