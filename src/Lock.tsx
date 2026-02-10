// import { useEffect, useState } from "react";
// import { FishBackground } from "./components/FishBackground";

// export default function Lock({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const ACCESS_CODE_HASH = "996f63ba280cb7700df3549e5b9fa6342af547797462875049e04302740cd2d1";

//   const [unlocked, setUnlocked] = useState(false);
//   const [code, setCode] = useState("");

//   const hashString = async (input: string) => {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(input);
//     const hashBuffer = await crypto.subtle.digest('SHA-256', data);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//   };

//   const unlock = async () => {
//     const hashedInput = await hashString(code);
//     if (hashedInput === ACCESS_CODE_HASH) {
//       setUnlocked(true);
//       setCode("");
//     } else {
//       alert("Invalid access code");
//     }
//   };

//   useEffect(() => {
//     const handler = () => {
//       if (document.hidden) {
//         setUnlocked(false);
//       }
//     };

//     document.addEventListener("visibilitychange", handler);
//     return () =>
//       document.removeEventListener("visibilitychange", handler);
//   }, []);

//   useEffect(() => {
//     const handler = () => {
//       setUnlocked(false);
//     };

//     window.addEventListener("beforeunload", handler);
//     return () =>
//       window.removeEventListener("beforeunload", handler);
//   }, []);

//   // Security: Disable Context Menu and Shortcuts
//   useEffect(() => {
//     const handleContextMenu = (e: MouseEvent) => {
//       if (!unlocked) {
//           e.preventDefault();
//       }
//     };

//     const handleKeyDown = (e: KeyboardEvent) => {
//       // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
//       if (
//         e.key === 'F12' || 
//         (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
//         (e.ctrlKey && e.key === 'u')
//       ) {
//         e.preventDefault();
//       }
//     };

//     document.addEventListener('contextmenu', handleContextMenu);
//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('contextmenu', handleContextMenu);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [unlocked]);

//   return (
//     <>
//       {!unlocked && (
//         <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background">
//           {/* Background Layer */}
//           <div className="absolute inset-0 bg-background -z-20" />
          
//           {/* Fish Background */}
//           <FishBackground />

//           {/* Ambient Effects */}
//           <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
//           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
          
//           <div className="glass-card p-10 flex flex-col gap-6 items-center max-w-sm w-full mx-4 border-primary/30 relative z-10 animate-fade-in-up">
//             <h3 className="text-3xl font-bold font-orbitron neon-text mb-2">ACCESS LOCKED</h3>

//             <div className="w-full space-y-4">
//               <input
//                 type="password"
//                 placeholder="Enter Access Code"
//                 value={code}
//                 onChange={(e) => setCode(e.target.value)}
//                 className="w-full bg-secondary/10 border border-primary/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all font-rajdhani text-center tracking-widest"
//                 onKeyDown={(e) => e.key === 'Enter' && unlock()}
//                 autoFocus
//               />

//               <button 
//                 onClick={unlock}
//                 className="neon-button w-full flex justify-center items-center"
//               >
//                 Unlock System
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className={unlocked ? "" : "hidden aria-hidden"}>
//         {children}
//       </div>
//     </>
//   );
// }
