import { useContext } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { ValueArrayContext } from "./ValueArrayContext";

function Chart() {
  const [valueArray, ] = useContext(ValueArrayContext);
  if (valueArray !== "" && !isNaN(valueArray[1].totalAmount)){
  return (
    <div className="placer">
      <div className="chart-wrap">
        <h1 className="annoucer">
          After five years your investment will be  worth <span>{valueArray[60].totalAmount}{"\u00A0"}$</span> with a total yield of <span>{valueArray[60].totalYield}$</span>
        </h1>

        <LineChart
          width={750}
          height={450}
          data={valueArray}
          margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="totalAmount"
            name="Total Amount"
            stroke="black"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="totalYield"
            name="Total Yield"
            stroke="white" 
            dot={false}
          />
          <CartesianGrid stroke="white" />
          <XAxis
            type="number"
            dataKey="id"
            stroke="white"
            label={{ value: "Months", position: "insideBottom", dy: 20 }}
          />
          <YAxis
            type="number"
            dataKey="totalAmount"
            stroke="white"
            label={{ value: "Value in $", angle: -90, dx: -20 }}
          />
          <Legend
            align="left"
            wrapperStyle={{
              position: "relative",
              marginLeft: "50px",
              bottom: "10px",
            }}
          />
        </LineChart>
      </div>
      </div>
  );
}
else return ("")
}
export { Chart };
