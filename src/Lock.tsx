import { useState } from "react";

const PASSWORD = "1234";

export default function Lock({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState(
    localStorage.getItem("site-unlocked") === "yes"
  );
  const [pwd, setPwd] = useState("");

  const submit = () => {
    if (pwd === PASSWORD) {
      localStorage.setItem("site-unlocked", "yes");
      setOk(true);
    } else {
      alert("Wrong password");
    }
  };

  if (ok) return <>{children}</>;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <h2>Enter password</h2>
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button onClick={submit}>Unlock</button>
    </div>
  );
}
