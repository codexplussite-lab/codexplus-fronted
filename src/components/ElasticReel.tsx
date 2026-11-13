import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';

export interface ElasticReelProps<T> {
  items: T[];
  getKey: (item: T, index: number) => string | number;
  renderItem: (item: T, state: { isActive: boolean; index: number }) => ReactNode;
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
  defaultActiveIndex?: number;
  activeFlex?: number;
  collapsedFlex?: number;
  className?: string;
}

/**
 * Interactive dock of slices that swell open with spring physics on hover or tap.
 * Supports controlled or uncontrolled active index and custom JSX overlays per slice.
 */
export function ElasticReel<T>({
  items,
  getKey,
  renderItem,
  activeIndex: controlledIndex,
  onActiveIndexChange,
  defaultActiveIndex = 0,
  activeFlex = 2.6,
  collapsedFlex = 0.85,
  className = '',
}: ElasticReelProps<T>) {
  const [internalIndex, setInternalIndex] = useState(defaultActiveIndex);
  const activeIndex = controlledIndex ?? internalIndex;

  const selectIndex = (index: number) => {
    if (controlledIndex === undefined) {
      setInternalIndex(index);
    }
    onActiveIndexChange?.(index);
  };

  return (
    <div
      className={`flex h-[440px] w-full items-stretch gap-2 overflow-hidden sm:h-[500px] sm:gap-3 lg:h-[560px] lg:gap-4 ${className}`.trim()}
      role="list"
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={getKey(item, index)}
            role="listitem"
            tabIndex={0}
            aria-expanded={isActive}
            onMouseEnter={() => selectIndex(index)}
            onFocus={() => selectIndex(index)}
            onClick={() => selectIndex(index)}
            initial={false}
            animate={{
              flexGrow: isActive ? activeFlex : collapsedFlex,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 26,
              mass: 0.9,
            }}
            className={`relative min-w-0 cursor-pointer overflow-hidden rounded-2xl border outline-none transition-[border-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-violet-400/70 ${
              isActive
                ? 'border-violet-400/35 shadow-[0_24px_70px_rgba(124,58,237,0.22),0_0_0_1px_rgba(167,139,250,0.16)]'
                : 'border-white/10 hover:border-white/20'
            }`}
            style={{ flexBasis: 0 }}
          >
            {renderItem(item, { isActive, index })}
          </motion.div>
        );
      })}
    </div>
  );
}
