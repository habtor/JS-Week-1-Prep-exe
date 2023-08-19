const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
let currentState = trafficLight.possibleStates[trafficLight.stateIndex];
while (cycle < 2) {
  currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);
  if (currentState === "green") {
    trafficLight.stateIndex = 1;
  } else if (currentState === "orange") {
    trafficLight.stateIndex = 2;
  } else {
    trafficLight.stateIndex = 0;
    cycle += 1;
  }
}
