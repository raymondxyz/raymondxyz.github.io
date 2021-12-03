import React from "react";

function SpringBar({
  barWidth,
  barColor
}) {
    return (
        <div
          style={{ width: barWidth, backgroundColor: barColor, height: "100vh" }}
        >
        </div>
    )
}



export default SpringBar