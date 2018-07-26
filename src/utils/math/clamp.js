/*
    Return numerical value clamped to supplied range
    Default to a signed clamp (-1 to 1)
    ---

    val        Number      Value to clamp
    min        Number      Minimum value to return
    max        Number      Maximum value to return

    ---
    Returns    Number      Clamped value

*/

export default function ( val, min = -1, max = 1 ) {

  return Math.min( Math.max( val, min ), max )
}
