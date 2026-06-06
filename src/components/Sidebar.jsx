function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        background: "#111827",
        borderRight: "1px solid #1f2937",
        padding: "25px"
      }}
    >
      <h2
        style={{
          color: "#f97316",
          marginBottom: "35px"
        }}
      >
        🛡️ ShadowGuard
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          color: "#d1d5db"
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "12px",
            borderRadius: "10px"
          }}
        >
          📊 Dashboard
        </div>

        <div>🚨 Alerts</div>
        <div>📈 Analytics</div>
        <div>📋 Logs</div>
        <div>⚙️ Settings</div>
      </div>
    </aside>
  );
}

export default Sidebar;