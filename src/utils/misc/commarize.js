export default function commarize( value, dp = 2 ) {

  if ( value >= 1e3 ) {

    const UNITS = [ 'k', 'M', 'B', 'T' ]
    const unit = Math.floor( ( ( value ).toFixed( 0 ).length - 1 ) / 3 ) * 3
    var num = ( value / ( '1e' + unit ) ).toFixed( dp )
    var unitname = UNITS[ Math.floor( unit / 3 ) - 1 ]

    return num + unitname
  }

  return value.toLocaleString()
}
