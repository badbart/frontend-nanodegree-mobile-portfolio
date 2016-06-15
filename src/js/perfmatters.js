"use strict";

/**
 * Measuring the Critical Rendering Path with Navigation Timing
 */
function logCRP() {
  var t = window.performance.timing;
  var dcl = t.domContentLoadedEventStart - t.domLoading;
  var complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function() {
  logCRP();
});
