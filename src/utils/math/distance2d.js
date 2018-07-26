/*
    Calculate distance between two 2D points
    ---

    x1        Number      X coordinate of first point
    y1        Number      Y coordinate of first point

    x2        Number      X coordinate of second point
    y2        Number      Y coordinate of second point

    ---
    Returns     Number      Distance between points

*/

export default function ( x1, y1, x2, y2 ) {

  const dx = x2 - x1
  const dy = y2 - y1

  return Math.sqrt( dx * dx + dy * dy )
}
