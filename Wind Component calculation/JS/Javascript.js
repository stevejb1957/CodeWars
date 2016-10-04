function windComponents(rwy, windDirection, windSpeed) {
  var runway = [];
  var Rwy = [];
  var dirc;
  var dirh;
  Rwy = rwy.split('');
  for (x = 0; x < 2; x++) {
    runway.push(Rwy[x]);
  }

  runway = runway + 0;
  runway = parseInt(runway.toString().replace(',', ''));

  var diff = runway - windDirection;
  if (diff < 0) {
    diff = Math.abs(diff) - 180;
  }
  if (diff < 0 || diff > 180) {
    dirc = 'right';
  } else if (diff > 0 || diff < 180) {
    dirc = 'left';
  }

  var diff = runway - windDirection;

  if (runway > 270 && runway <= 360 && windDirection > 0 && windDirection < 90 || runway > 0 && runway < 90 && windDirection > 270 && windDirection <= 360) {
    var diff = Math.abs(diff) - 360;
  }

  if (diff < 89 && diff > -89) {
    dirh = 'Head';
  } else {
    dirh = 'Tail';
  }

  diff = Math.abs(diff);
  rad = diff * (Math.PI / 180);
  var CW = Math.abs(Math.round(windSpeed * Math.sin(rad)));
  var HW = Math.abs(Math.round(windSpeed * Math.cos(rad)));
  if (Math.abs(diff) == 90) {
    dirh = 'Head';
    HW = 0;
  }

  alert(dirh + "wind " + HW + " knots. Crosswind " + CW + " knots from your " + dirc + ".");
}

windComponents("36",48,25)