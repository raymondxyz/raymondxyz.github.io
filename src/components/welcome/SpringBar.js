import React from "react";

function SpringBar({
  barHeight,
  barColor
}) {
    return (
        <div
          style={{ height: barHeight, backgroundColor: barColor, width: "100vw" }}
        >
        </div>
    )
}



export default SpringBar