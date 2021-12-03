import React from "react";

function SpringBar({
  barWidth,
  barColor
}) {
    return (
        <div
          style={{ width: barWidth, color: barColor, height: "100vh" }}
        >
        </div>
    )
}



export default SpringBar