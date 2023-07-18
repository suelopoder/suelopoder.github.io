// Could I just use and images instead of this?
// Yes! But there is no fun in it.
function drawQuote(canvas, center) {
  var mainCircle = canvas.getContext("2d");
  mainCircle.beginPath();
  mainCircle.arc(center.x, center.y, 25, Math.PI / 2.2, Math.PI * 2.2);
  mainCircle.fill();

  var firstEllipseLine = canvas.getContext("2d");
  firstEllipseLine.beginPath();
  firstEllipseLine.ellipse(center.x, center.y, 25, 50, Math.PI / 8, 0, Math.PI / 2);
  firstEllipseLine.fill();

  var firstEllipseLine = canvas.getContext("2d");
  firstEllipseLine.beginPath();
  firstEllipseLine.ellipse(center.x, center.y, 15, 50, Math.PI / 8, Math.PI / 8, Math.PI / 2);
  firstEllipseLine.fill();
}

function init() {
  const canvas = document.getElementById('quote-image');
  drawQuote(canvas, { x: 90, y: 50 });
  drawQuote(canvas, { x: 150, y: 50 });
}

document.addEventListener("DOMContentLoaded", init);