import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Paper, Typography } from "@mui/material";

interface IDataGraph {
  emotionScore: number;
  desireToStay_score: number;
  tensionLevel: number;
  entryOrder: number;
  entryTime: Date;
}

interface GraphsProps {
  data: IDataGraph[];
}

const COLORS = {
  total: "#5c6bc0",
  emotionScore: "#26a69a",
  desireToStay_score: "#66bb6a",
  tensionLevel: "#ffa726",
  entryOrder: "#8d6e63",
};

const Graphs = ({ data }: GraphsProps) => {
    const titles = [
  "ציון רגש",
  "רצון להישאר יחד",
  "רמת מתח",
  "תקווה לעתיד"
]
  const sortedData = useMemo(() => {
    return [...data].sort(
      (a, b) =>
        new Date(a.entryTime).getTime() - new Date(b.entryTime).getTime()
    );
  }, [data]);

  const chartData = useMemo(() => {
    return sortedData.map((item) => {
      const dateObj = new Date(item.entryTime);

      return {
        x: dateObj.getTime(), // X ייחודי
        date: dateObj.toLocaleDateString(),
        time: dateObj.toLocaleTimeString(),
        emotionScore: item.emotionScore,
        desireToStay_score: item.desireToStay_score,
        tensionLevel: item.tensionLevel,
        entryOrder: item.entryOrder,
        total:
          item.emotionScore +
          item.desireToStay_score +
          item.tensionLevel +
          item.entryOrder,
      };
    });
  }, [sortedData]);

  const dayTicks = useMemo(() => {
    const map = new Map<string, number>();

    sortedData.forEach((item) => {
      const d = new Date(item.entryTime);
      const dayKey = d.toISOString().split("T")[0]; // YYYY-MM-DD

      if (!map.has(dayKey)) {
        const startOfDay = new Date(
          d.getFullYear(),
          d.getMonth(),
          d.getDate()
        ).getTime();

        map.set(dayKey, startOfDay);
      }
    });

    return Array.from(map.values());
  }, [sortedData]);

  /* Tooltip */
  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload?.length) return null;

    const point = payload[0].payload;

    return (
      <Paper
        elevation={3}
        sx={{
          p: 1.5,
          backgroundColor: "rgba(255,255,255,0.95)",
          borderRadius: 2,
        }}
      >
        <Typography variant="caption">
          {point.date} – {point.time}
        </Typography>

        {payload.map((item: any) => (
          <Typography
            key={item.dataKey}
            variant="body2"
            sx={{ color: item.stroke }}
          >
            {item.dataKey}: {item.value}
          </Typography>
        ))}
      </Paper>
    );
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      {/* גרף מרכזי */}
      <Paper
        sx={{
          p: 3,
          borderRadius: 3,
          background:
            "linear-gradient(180deg, #f9fafb 0%, #eef2f7 100%)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          גרף מרכזי – סכום כולל
        </Typography>

        <ResponsiveContainer width="100%" height={420}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              type="number"
              domain={["dataMin", "dataMax"]}
              ticks={dayTicks}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString()
              }
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke={COLORS.total}
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
              animationDuration={1600}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      {/* גרפים משניים */}
      <Box display="flex" flexWrap="wrap" gap={4}>
        { 
        (
          ["emotionScore", "desireToStay_score", "tensionLevel", "entryOrder"] as const
        ).map((key, i) => (
          <Paper
            key={key}
            sx={{
              flex: "1 1 50%",
              p: 3,
              borderRadius: 3,
              backgroundColor: "rgba(240, 248, 255, 0.904);",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              {titles[i]}
            </Typography>

            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="x"
                  type="number"
                  domain={["dataMin", "dataMax"]}
                  ticks={dayTicks}
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString()
                  }
                />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey={key}
                  stroke={COLORS[key]}
                  strokeWidth={2.5}
                  dot={{ r: 2.5 }}
                  activeDot={{ r: 5 }}
                  animationDuration={1400}
                  animationEasing="ease-out"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Graphs;
