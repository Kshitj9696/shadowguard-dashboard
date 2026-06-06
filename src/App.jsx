import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import AlertTable from "./components/AlertTable";
import ActivityFeed from "./components/ActivityFeed";
import ThreatChart from "./components/ThreatChart";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:"linear-gradient(135deg,#020617,#0f172a,#111827)",
        color: "white",
        display: "flex",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "30px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px"
          }}
        >
          <div>
            <h1
            style={{
              margin: 0,
              fontSize: "42px",
              lineHeight: "1.2"
            }}
            >
              Security Dashboard
            </h1>

            <p
              style={{
              color: "#94a3b8",
              marginTop: "10px",
              marginBottom: "0"
              }}
            >
              Real-Time AI Prompt Monitoring
            </p>
          </div>

          <div
            style={{
              background: "#111827",
              padding: "12px 20px",
              borderRadius: "12px"
            }}
          >
            🟢 System Active
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "30px"
          }}
        >
          <StatsCard
            title="Total Scans"
            value="12,480"
            color="#3b82f6"
          />

          <StatsCard
            title="Blocked"
            value="321"
            color="#ef4444"
          />

          <StatsCard
            title="Warnings"
            value="842"
            color="#f59e0b"
          />

          <StatsCard
            title="Safe"
            value="11,317"
            color="#22c55e"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "20px",
            marginBottom: "20px"
          }}
        >
          <ThreatChart />

          <AlertTable />
        </div>

        <>
  <ActivityFeed />

  <div
    style={{
      textAlign: "center",
      color: "#64748b",
      marginTop: "30px",
      paddingBottom: "20px"
    }}
  >
    ShadowGuard v1.0 • AI Prompt Security Middleware
  </div>
</>
      </main>
    </div>
  );
}

export default App;