"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
export default function WalletChart({ data = [] }) {
  return (
    <div className="h-52 w-52">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            outerRadius={100}
            innerRadius={2.5}
            dataKey="percent"
            paddingAngle={4}
            cornerRadius={15}
            labelLine={false}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
              const radius = innerRadius + (outerRadius - innerRadius) / 2;
              const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
              const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

              return (
                <>
                  <circle cx={x} cy={y} r={18} fill="#fff" />
                  <text
                    x={x}
                    y={y}
                    fill="#000"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {Math.round(percent)}%
                  </text>
                </>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={entry.color}
                strokeWidth={2}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
