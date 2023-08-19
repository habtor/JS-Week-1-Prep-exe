const trafficLight = {
  state: "green",
};

// change "const" of currentState variable to "let" to make it changable
// put the "currentState" variable outside the loop, unless we will have infinite loop.

let rotations = 0;
let currentState = trafficLight.state;
while (rotations < 2) {
  console.log("The traffic light is on", currentState);

  if (currentState === "green") {
    currentState = "orange";
  } else if (currentState === "orange") {
    currentState = "red";
  } else {
    currentState = "green";
    rotations += 1;
  }
}
