import React from 'react';

interface ProgressiveBlurProps {
  position?: 'top' | 'bottom' | 'both';
  height?: string;
  className?: string;
}

/**
 * ProgressiveBlur renders a multi-stop, physically-accurate optical blur gradient.
 * It blends sharp 3D background elements smoothly into frosted obsidian glass,
 * eliminating harsh boundaries and giving an ultra-luxurious, cinematic feel.
 */
export const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  position = 'both',
  height = 'h-28',
  className = '',
}) => {
  return (
    <>
      {/* Top Progressive Blur Feather */}
      {(position === 'top' || position === 'both') && (
        <div
          className={`pointer-events-none fixed inset-x-0 top-0 z-30 select-none overflow-hidden ${height} ${className}`}
          aria-hidden="true"
        >
          {/* Multi-layered progressive optical blur steps */}
          <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_30%)]" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_50%)]" />
          <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_70%)]" />
          <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]" />
          <div className="absolute inset-0 backdrop-blur-[16px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]" />
          <div className="absolute inset-0 backdrop-blur-[24px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]" />
          
          {/* Subtle obsidian & gold gradient light dispersion */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/95 via-[#0b0c10]/55 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent" />
        </div>
      )}

      {/* Bottom Progressive Blur Feather */}
      {(position === 'bottom' || position === 'both') && (
        <div
          className={`pointer-events-none fixed inset-x-0 bottom-0 z-30 select-none overflow-hidden ${height} ${className}`}
          aria-hidden="true"
        >
          {/* Multi-layered progressive optical blur steps from bottom upwards */}
          <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(to_top,black_0%,transparent_30%)]" />
          <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_0%,transparent_50%)]" />
          <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_top,black_0%,transparent_70%)]" />
          <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:linear-gradient(to_top,black_0%,transparent_85%)]" />
          <div className="absolute inset-0 backdrop-blur-[16px] [mask-image:linear-gradient(to_top,black_0%,transparent_100%)]" />
          <div className="absolute inset-0 backdrop-blur-[24px] [mask-image:linear-gradient(to_top,black_0%,transparent_100%)]" />
          
          {/* Subtle obsidian gradient to soften bottom scroll bounds */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/95 via-[#0b0c10]/55 to-transparent" />
        </div>
      )}
    </>
  );
};
