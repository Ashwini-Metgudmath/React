import React from "react";

function TimeOfDay() {
  const date = new Date(2019, 12, 4, 18);
  const hours = date.getHours();
  const styles = {
    fontSize : 30
  }
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "Morning";
    styles.color = "#fcba03";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    styles.color = "#35fc03";
  } else {
    timeOfDay = "Evening";
    styles.color = "#0328fc";
  }

  return <h1 style={styles}>Good {timeOfDay}</h1>;
}

export default TimeOfDay;