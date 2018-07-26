/*

    Draw a circle on the provided canvas 2d context.
    By default a full, closed-path circle is drawn.

    ctx             context2D       Canvas context to draw to
    x               Number          X position at centre of circle
    y               Number          Y position at centre of circle
    radius          Number          Radius of circle

    closed          Bool           optional - Close path flag
    thetaStart      Number         optional - Start angle (in Radians)
    thetaEnd        Number         optional - End angle (in Radians)
    anticlockwise   Bool           optional - Anti-clockwise flag
    convert         Bool           optional - Flag whether angle is passed in as degrees

*/

export default function (

  ctx,
  x = 0,
  y = 0,
  radius = 1,

  closed = true,
  thetaStart = 0,
  thetaEnd = Math.PI * 2,
  anticlockwise = false,
  convert = false

) {

  // Convert degrees to radians
  thetaStart = convert === true ? thetaStart * ( Math.PI / 180 ) : thetaStart
  thetaEnd = convert === true ? thetaEnd * ( Math.PI / 180 ) : thetaEnd

  // Draw circle
  ctx.beginPath()
  ctx.arc( x, y, radius, thetaStart, thetaEnd, anticlockwise )
  if ( closed ) ctx.closePath()

}
