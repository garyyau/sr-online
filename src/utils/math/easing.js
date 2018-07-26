/*
    Penner's easing equations adapted to accept a single normalised progress value
    ---

    a          Number      'alpha' value (from 0-1)

    ---
    Returns    Number      Normalised value with easing applied

*/

// Linear

export function linear( a ) {

  return a
}

// Sine

export function inSine( a ) {

  return -1 * Math.cos( a * ( Math.PI / 2 ) ) + 1
}

export function outSine( a ) {

  return 1 * Math.sin( a * ( Math.PI / 2 ) )
}

export function inOutSine( a ) {

  return -0.5 * ( Math.cos( Math.PI * a / 1 ) - 1 )
}

// Quad

export function inQuad( a ) {

  return a * a
}

export function outQuad( a ) {

  return -1 * a * ( a - 2 )
}

export function inOutQuad( a ) {

  a /= 0.5
  if ( a < 1 ) return 0.5 * a * a
  a--
  return -0.5 * ( a * ( a - 2 ) - 1 )
}

// Cubic

export function inCubic( a ) {

  return a * a * a
}

export function outCubic( a ) {

  a--
  return ( a * a * a + 1 )
}

export function inOutCubic( a ) {

  a /= 0.5
  if ( a < 1 ) return 0.5 * a * a * a
  a -= 2
  return 0.5 * ( a * a * a + 2 )
}

// Quart

export function inQuart( a ) {

  return a * a * a * a
}

export function outQuart( a ) {

  a--
  return -1 * ( a * a * a * a - 1 )
}

export function inOutQuart( a ) {

  a /= 0.5
  if ( a < 1 ) return 0.5 * a * a * a * a
  a -= 2
  return -0.5 * ( a * a * a * a - 2 )
}

// Quint

export function inQuint( a ) {

  return a * a * a * a * a
}

export function outQuint( a ) {

  a--
  return a * a * a * a * a + 1
}

export function inOutQuint( a ) {

  a /= 0.5
  if ( a < 1 ) return 0.5 * a * a * a * a * a
  a -= 2
  return 0.5 * ( a * a * a * a * a + 2 )
}

// Expo

export function inExpo( a ) {

  return Math.pow( 2, 10 * ( a - 1 ) )
}

export function outExpo( a ) {

  return -Math.pow( 2, -10 * a ) + 1
}

export function inOutExpo( a ) {

  a /= 0.5
  if ( a < 1 ) return 0.5 * Math.pow( 2, 10 * ( a - 1 ) )
  a--
  return 0.5 * ( -Math.pow( 2, -10 * a ) + 2 )
}
