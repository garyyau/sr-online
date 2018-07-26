/*
    Shuffle the supplied array, returns a new array
    Source: https://stackoverflow.com/a/6274381
    ---

    arr         Array      Array to be shuffled
    inPlace    Boolean    Flag whether to return a new array instance

    ---
    Returns     Array      Shuffled array

*/

export default function shuffleArray( arr ) {

  let j, x, i
  let a = [ ...arr ]

  for ( i = a.length - 1; i > 0; i-- ) {
    j = Math.floor( Math.random() * ( i + 1 ) )
    x = a[ i ]
    a[ i ] = a[ j ]
    a[ j ] = x
  }

  return a
}
