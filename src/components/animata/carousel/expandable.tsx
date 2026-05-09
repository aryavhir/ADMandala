import { type HTMLAttributes, useEffect, useState, type ReactNode } from "react";
import WaveReveal from "../text/wave-reveal";
import { cn } from "@/lib/utils";

interface ExpandableItem {
  color: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  icon?: ReactNode;
  badge?: { text: string; className: string };
  progress?: number;
}

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: ExpandableItem;
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list: ExpandableItem[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  const isActive = index === activeItem;
  
  return (
    <div
      className={cn(
        "relative flex h-full w-full cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out md:min-w-16",
        {
          "flex-[3] md:flex-[3]": isActive,
          "flex-1 md:flex-1": !isActive,
        },
        className,
      )}
      {...props}
    >
      {/* Background Color / Glossy Effect */}
      <div 
        className="absolute inset-0 z-0 transition-colors duration-700"
        style={{ backgroundColor: item.color }}
      >
        {/* Shine Element */}
        <div className="absolute inset-0 z-0 h-full w-full animate-glossy-shine bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className={cn("absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500", {
          "opacity-100": isActive,
          "opacity-60": !isActive,
        })} />
      </div>

      {/* Title Placeholder (when collapsed) */}
      {!isActive && (
        <div className="absolute inset-0 z-10 flex items-center justify-center p-2">
           <span className="whitespace-nowrap text-lg font-bold text-white/60 md:rotate-180 md:[writing-mode:vertical-lr]">
              {item.title}
           </span>
        </div>
      )}

      {/* Expanded Content */}
      {isActive && (
        <div className="absolute inset-0 z-20 flex flex-col justify-start p-6 pt-12 text-white md:p-10 md:pt-20">
          <div className="mb-4 flex items-center gap-4 md:mb-10">
             {item.badge && (
                <div className={cn("rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider md:text-xs", item.badge.className)}>
                   {item.badge.text}
                </div>
             )}
             {item.icon && <div className="text-white/80">{item.icon}</div>}
          </div>

          <WaveReveal
            duration="800ms"
            className="items-start justify-start p-0 text-left text-lg font-semibold leading-tight sm:text-xl md:text-2xl lg:text-3xl"
            text={item.title}
            direction="up"
          />
          
          <div className="mt-4 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col gap-4 md:mt-6 md:gap-6">
             {item.subtitle && <p className="text-base font-medium text-white/90 md:text-xl">{item.subtitle}</p>}
             {item.description && <div className="text-xs leading-relaxed text-white/70 md:text-base">{item.description}</div>}
             
             {item.progress !== undefined && (
                <div className="mt-2 flex flex-col gap-2 md:mt-6">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/40 md:text-xs">
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div 
                     className="h-full bg-white transition-all duration-1000 ease-out" 
                     style={{ width: `${item.progress}%` }} 
                    />
                  </div>
                </div>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Expandable({ list, autoPlay = true, className }: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovering) {
      return;
    }

    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % list.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div className={cn("flex flex-col h-[700px] w-full gap-2 md:flex-row md:h-[600px]", className)}>
      {list.map((item, index) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onClick={() => setActiveItem(index)}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
}
