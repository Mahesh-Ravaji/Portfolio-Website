// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Globe, Clock } from 'lucide-react';
// import { cn } from '../lib/utils';

// interface VisitorStats {
//   current: number;
//   total: number;
//   countries: string[];
// }

// export function VisitorCount() {
//   const [stats, setStats] = useState<VisitorStats>({
//     current: 1,
//     total: 100,
//     countries: ['US', 'UK', 'IN', 'CA', 'AU']
//   });
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     // Simulate visitor count updates
//     const interval = setInterval(() => {
//       setStats(prev => ({
//         ...prev,
//         current: Math.min(prev.current + Math.floor(Math.random() * 2), 99),
//         total: prev.total + Math.floor(Math.random() * 5)
//       }));
//     }, 5000);

//     // Update time
//     const timeInterval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//       clearInterval(timeInterval);
//     };
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       className="fixed left-4 top-4 space-y-2"
//     >
//       <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg space-y-2">
//         <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
//           <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
//           <span className="font-medium">{stats.current} online now</span>
//         </div>

//         <div className="flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
//           <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//           <span className="font-medium">{stats.total.toLocaleString()} total visits</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
//           <span className="font-medium">
//             {time.toLocaleTimeString()}
//           </span>
//         </div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="flex gap-1"
//       >
//         {stats.countries.map((country, index) => (
//           <motion.div
//             key={country}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className={cn(
//               "w-8 h-8 rounded-lg flex items-center justify-center",
//               "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg",
//               "text-sm font-medium"
//             )}
//           >
//             {country}
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// }