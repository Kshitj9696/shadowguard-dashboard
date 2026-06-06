function AlertTable() {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "18px",
        padding: "20px"
      }}
    >
      <h2>Recent Alerts</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr
            style={{
              color: "#94a3b8"
            }}
          >
            <th align="left">Time</th>
            <th align="left">Platform</th>
            <th align="left">Severity</th>
            <th align="left">Type</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>10:42 AM</td>
            <td>ChatGPT</td>
            <td style={{ color: "#ef4444" }}>
              BLOCKED
            </td>
            <td>Aadhaar Number</td>
          </tr>

          <tr>
            <td>11:15 AM</td>
            <td>Gemini</td>
            <td style={{ color: "#f59e0b" }}>
              WARNING
            </td>
            <td>Email Address</td>
          </tr>

          <tr>
            <td>11:51 AM</td>
            <td>Claude</td>
            <td style={{ color: "#ef4444" }}>
              BLOCKED
            </td>
            <td>Bank Details</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AlertTable;