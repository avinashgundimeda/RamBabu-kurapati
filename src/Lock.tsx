import { useEffect, useState } from "react";

export default function Lock({
  children,
}: {
  children: React.ReactNode;
}) {
  const PASSWORD = "1234";

  const [unlocked, setUnlocked] = useState(false);
  const [pwd, setPwd] = useState("");

  const unlock = () => {
    if (pwd === PASSWORD) {
      setUnlocked(true);
      setPwd("");
    } else {
      alert("Wrong password");
    }
  };

  // Re-lock when tab becomes hidden
  useEffect(() => {
    const handler = () => {
      if (document.hidden) {
        setUnlocked(false);
      }
    };

    document.addEventListener("visibilitychange", handler);
    return () =>
      document.removeEventListener("visibilitychange", handler);
  }, []);

  // Re-lock on refresh / close
  useEffect(() => {
    const handler = () => {
      setUnlocked(false);
    };

    window.addEventListener("beforeunload", handler);
    return () =>
      window.removeEventListener("beforeunload", handler);
  }, []);

  if (!unlocked) {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="glass-card p-10 flex flex-col gap-6 items-center max-w-sm w-full mx-4 border-primary/30 relative z-10 animate-fade-in-up">
        <h3 className="text-3xl font-bold font-orbitron neon-text mb-2">ACCESS LOCKED</h3>

        <div className="w-full space-y-4">
          <input
            type="password"
            placeholder="Enter Access Code"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="w-full bg-secondary/10 border border-primary/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(var(--primary),0.3)] transition-all font-rajdhani text-center tracking-widest"
            onKeyDown={(e) => e.key === 'Enter' && unlock()}
          />

          <button 
            onClick={unlock}
            className="neon-button w-full flex justify-center items-center"
          >
            Unlock System
          </button>
        </div>
      </div>
    </div>
    );
  }

  return <>{children}</>;
}
