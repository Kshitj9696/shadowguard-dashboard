import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Aadhaar",
    value: 45
  },
  {
    name: "Bank Details",
    value: 25
  },
  {
    name: "Email",
    value: 20
  },
  {
    name: "PAN",
    value: 10
  }
];

const COLORS = [
  "#ef4444",
  "#f59e0b",
  "#3b82f6",
  "#22c55e"
];

function ThreatChart() {
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "18px",
        padding: "20px",
        height: "420px"
      }}
    >
      <h2
        style={{
          marginBottom: "20px"
        }}
      >
        Threat Distribution
      </h2>

      <ResponsiveContainer
        width="100%"
        height="85%"
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={95}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ThreatChart;