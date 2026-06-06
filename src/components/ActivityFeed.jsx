function ActivityFeed() {
  const logs = [
    "Blocked Aadhaar Number",
    "Warning: Email Detected",
    "Blocked Bank Account",
    "Safe Prompt Scanned",
    "Warning: PAN Card"
  ];

  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "18px",
        padding: "25px",
        marginTop: "20px"
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "20px"
        }}
      >
        Recent Activity
      </h2>

      {logs.map((log, index) => (
        <div
          key={index}
          style={{
            padding: "12px 0",
            borderBottom:
              index !== logs.length - 1
                ? "1px solid #1f2937"
                : "none"
          }}
        >
          {log}
        </div>
      ))}
    </div>
  );
}

export default ActivityFeed;