import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '../constants';
import { motion, useInView, useSpring } from 'framer-motion';

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { bounce: 0, duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="font-heading font-bold text-4xl md:text-5xl text-brand-gold block mb-2">
      {displayValue}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-gold rounded-full blur-3xl transform -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-slate-300 text-sm md:text-base uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;