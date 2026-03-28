'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface FloatingCurrentTimeProps {
  selectedTime?: string;
  onDismiss?: () => void;
}

function calcTimeDiff(selectedTime: string): { header: string; value: string } {
  const now = new Date();
  const [selHour, selMin] = selectedTime.split(':').map(Number);
  const selected = new Date();
  selected.setHours(selHour, selMin, 0, 0);

  const diffMin = Math.round((selected.getTime() - now.getTime()) / 60000);

  if (diffMin === 0) {
    return { header: '지금 출발', value: selectedTime };
  } else if (diffMin > 0) {
    const h = Math.floor(diffMin / 60);
    const m = diffMin % 60;
    return { header: '남은시간', value: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}` };
  } else {
    const abs = Math.abs(diffMin);
    const h = Math.floor(abs / 60);
    const m = abs % 60;
    return { header: '지나간시간', value: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}` };
  }
}

export function FloatingCurrentTime({ selectedTime, onDismiss }: FloatingCurrentTimeProps) {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [timeDiff, setTimeDiff] = useState<{ header: string; value: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${h}:${m}`);
      setTimeDiff(selectedTime ? calcTimeDiff(selectedTime) : null);
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [selectedTime]);

  return (
    <AnimatePresence>
      {currentTime && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div
            className="py-2.5 px-3.5 shadow-lg rounded-2xl bg-gray-700 text-white flex flex-col items-start gap-1 cursor-pointer select-none"
            onClick={selectedTime ? onDismiss : undefined}
          >
            <AnimatePresence>
              {!selectedTime && (
                <motion.div
                  key="current"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full overflow-hidden"
                >
                  <div className="flex items-center gap-1.5 w-full">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    <span className="text-[10px] opacity-70">현재시간</span>
                  </div>
                  <div className="font-mono font-bold text-lg leading-none">{currentTime}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {selectedTime && timeDiff && (
                <motion.div
                  key="diff"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full overflow-hidden"
                >
                  <div className="flex items-center gap-1.5 w-full">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    <span className="text-[10px] opacity-70">{timeDiff.header}</span>
                  </div>
                  <div className="font-mono font-bold text-lg leading-none">{timeDiff.value}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
