import React from "react";
import { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [{ name: "Group A", value: 400 }];
const COLORS = ["#0c223f"];

export default class CircleGraph extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/3Leoa7f4/";

  render() {
    return (
      <PieChart width={217} height={217} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={103}
          cy={103}
          innerRadius={80}
          outerRadius={108.5}
          fill="#0c223f"
          paddingAngle={0}
          dataKey="value"
          startAngle={90}
          endAngle={this.props.endAngle}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
