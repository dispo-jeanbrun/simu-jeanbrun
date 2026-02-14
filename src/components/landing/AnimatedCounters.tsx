'use client';

import { useEffect, useRef, useState } from 'react';

const counters = [
  { value: '5,5%', label: "d'amortissement annuel", suffix: '' },
  { value: '10 700 €', label: 'de déficit foncier imputable/an', suffix: '' },
  { value: '0 €', label: 'de réintégration en plus-value', suffix: '' },
  { value: '2026-2028', label: "fenêtre d'investissement", suffix: '' },
];

export function AnimatedCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {counters.map((counter, i) => (
            <div
              key={counter.label}
              className={`text-center transition-all duration-700 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-secondary-light mb-2">
                {counter.value}
              </div>
              <div className="text-sm text-white/60">
                {counter.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
