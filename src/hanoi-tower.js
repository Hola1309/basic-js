module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let sol = {};

  sol.turns = 2**disksNumber - 1;
  sol.seconds = sol.turns / (turnsSpeed / 3600);

  return sol;
}
