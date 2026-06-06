function StatsCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "16px",
        padding: "24px",
        borderTop: `4px solid ${color}`,
        boxShadow: `0 0 15px ${color}30`,
        cursor: "pointer",
        transition: "0.3s"
      }}
    >
      <p
        style={{
          color: "#94a3b8",
          marginBottom: "12px"
        }}
      >
        {title}
      </p>

      <h1
        style={{
          margin: 0,
          fontSize: "48px"
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatsCard;