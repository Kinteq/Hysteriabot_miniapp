'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-nyxion-gradient px-4 py-6 text-white"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">🌊</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">Nyxion VPN</h1>
            <p className="text-sm opacity-90">Ваша свобода в сети</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
