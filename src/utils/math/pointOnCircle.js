/*

    Get the X and Y coordinates of a point on a circle at the supplied angle
    Default is a unit circle (radius = 1) with a center origin [0, 0]
    ---
    http://stackoverflow.com/a/839931/6512315

    theta       Number      Angle around circle to calculate for
    x           Number      X position at circle centre
    y           Number      Y position at circle centre
    radius      Number      Radius of the circle

    convert     Bool        optional - Flag whether angle is passed in as degrees

    ---
    Returns     Object      Calculated point's coordinate pair

*/

export default function (

  theta,
  x = 0,
  y = 0,
  radius = 1,

  convert = false

) {

  // Convert degrees to radians
  theta = convert ? theta * ( Math.PI / 180 ) : theta

  return {
    x: x + radius * Math.cos( theta ),
    y: y + radius * Math.sin( theta ),
  }
}
