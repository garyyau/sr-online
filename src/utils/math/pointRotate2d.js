/*
    Simple cartesian rotation in 2D space
    ---
    Source: http://stackoverflow.com/a/17411276/6512315

    theta       Number    Angle of rotation (Radians or Degrees with convert flag)
    x           Number    X coordinate of point to be rotated
    y           Number    Y coordinate of point to be rotated
    originX     Number    Origin X coordinate
    originY     Number    Origin Y coordinate

    convert     Bool      Optional - Flag whether to convert theta from degrees to radians

    --
    Returns     Object    Rotated point coordinates

*/

export default function (

  theta, x, y,

  originX = 0,
  originY = 0,
  convert = false

) {

  // Convert to radians if flagged as degrees
  if ( convert ) { theta *= Math.PI / 180 };

  let rotatedX = originX + ( Math.cos( theta ) * ( x - originX ) ) + ( Math.sin( theta ) * ( y - originY ) )
  let rotatedY = originY + ( Math.cos( theta ) * ( y - originY ) ) - ( Math.sin( theta ) * ( x - originX ) )

  return { x: rotatedX, y: rotatedY }
}
