import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

export default function Skills() {
  // Data for chart
  const skillsData = [
    { name: "React.js", exp: 0.8 },
    { name: "ASP.NET Core 5/6", exp: 5.5 },
    { name: "ASP.NET Ajax", exp: 6 },
    { name: "SQL Server", exp: 8.1 },
    { name: "jQuery", exp: 6 },
    { name: "JavaScript", exp: 5 },
    { name: "Asp.Net(Web Form)", exp: 6 },
    { name: "ADV.NET(MVC)MVC 5", exp: 6.5 },
  ];

  // Eye-catching colors for bars
  const colors = [
     "#ffadad", // soft red
    "#ffd6a5", // soft orange
    "#fdffb6", // pale yellow
    "#caffbf", // mint green
    "#9bf6ff", // sky blue
    "#a0c4ff", // light blue
    "#bdb2ff", // lavender
    "#ffc6ff", // pink
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Chart Section */}
      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer>
          <BarChart
            data={skillsData}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#0703f4ff" />
            <XAxis
            dataKey="name"
            interval={0}
            angle={-45} // tilt labels for readability
            textAnchor="end"
            tick={{ fill: "#ffffffff", fontSize: 14 }}
            height={80} // give axis more height
            />
             <YAxis tick={{ fill: "#ffffffff", fontSize: 14 }} />
                <Tooltip />
                <Legend />
                <Bar
                dataKey="exp"
                name="Years of Experience"
                barSize={30} // narrower bars
                >
                {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
