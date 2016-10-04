function distance(coord1, coord2) {

  var coord1Lat = coord1.match(/[0-9]+/);
  var coord1LatMin = coord1.match(/\s[0-9]+/);
  var coord1LatSec = coord1.match(/\s[0-9]+′ ([0-9]+)/);

  var coord2Lat = coord2.match(/[0-9]+/);
  var coord2LatMin = coord2.match(/\s[0-9]+/);
  var coord2LatSec = coord2.match(/([0-8][0-9]|[0-9])″/);

  var coord1Long = coord1.match(/, ([0-9]+)/);
  var coord1LongMin = coord1.match(/, [0-9]+[°] ([0-9]+)[′]/);
  var coord1LongSec = coord1.match(/, [0-9]+[°] [0-9]+[′] ([0-9]+)[″]/);

  var coord2Long = coord2.match(/, ([0-9]+)/);
  var coord2LongMin = coord2.match(/, [0-9]+[°] ([0-9]+)[′]/);
  var coord2LongSec = coord2.match(/, [0-9]+[°] [0-9]+[′] ([0-9]+)[″]/);

  var r = 6371;

  coord1Lat = parseInt(coord1Lat);
  coord1LatMin = parseFloat(coord1LatMin / 60);
  coord1LatSec = parseFloat(coord1LatSec[1] / 3600);
  coord1Lat = coord1Lat + coord1LatMin + coord1LatSec;
  coord1Lat = coord1Lat * (Math.PI / 180);

  coord2Lat = parseInt(coord2Lat);
  coord2LatMin = parseFloat(coord2LatMin / 60);
  coord2LatSec = parseFloat(coord2LatSec[1] / 3600);
  coord2Lat = coord2Lat + coord2LatMin + coord2LatSec;
  coord2Lat = coord2Lat * (Math.PI / 180);

  coord1Long = parseInt(coord1Long[1]);
  coord1LongMin = parseFloat(coord1LongMin[1] / 60);
  coord1LongSec = parseFloat(coord1LongSec[1] / 3600);
  coord1Long = coord1Long + coord1LongMin + coord1LongSec;
  coord1Long = coord1Long * (Math.PI / 180);

  coord2Long = parseInt(coord2Long[1]);
  coord2LongMin = parseFloat(coord2LongMin[1] / 60);
  coord2LongSec = parseFloat(coord2LongSec[1] / 3600);
  coord2Long = coord2Long + coord2LongMin + coord2LongSec;
  coord2Long = coord2Long * (Math.PI / 180);

  var Lat1 = coord1.match(/([0-8][0-9]|[0-9])″ ([A-Z])/);
  var Lat2 = coord2.match(/([0-8][0-9]|[0-9])″ ([A-Z])/);
  var Long1 = coord1.match(/, [0-9]+[°] [0-9]+[′] ([0-9]+)[″] ([A-Z])/);
  var Long2 = coord2.match(/, [0-9]+[°] [0-9]+[′] ([0-9]+)[″] ([A-Z])/);

  if (Lat1[2] == "S") {
    coord1Lat = -coord1Lat;
  }
  if (Lat2[2] == "S") {
    coord2Lat = -coord2Lat;
  }
  if (Long1[2] == "W") {
    coord1Long = -coord1Long;
  }
  if (Long2[2] == "W") {
    coord2Long = -coord2Long;
  }
  var a1 = Math.sin((coord2Lat - coord1Lat) / 2) * Math.sin((coord2Lat - coord1Lat) / 2);
  var a2 = Math.cos(coord2Lat) * Math.cos(coord1Lat);
  var a3 = Math.sin((coord2Long - coord1Long) / 2) * Math.sin((coord2Long - coord1Long) / 2);
  var a = a1 + a2 * a3;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = r * c;
  d = Math.floor(d / 10) * 10;

  return d;

}
