function slope(points)
{
var a = points[0]
var b = points[1]
var c = points[2]
var d = points[3]
slope = (d-b)/(c-a)
if((c-a) == 0 ){
alert('undefined')
}
alert(String(slope))
}

slope([-10,6,-10,3])
