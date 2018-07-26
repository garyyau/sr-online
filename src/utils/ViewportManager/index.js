/*
  Establish the ViewportManager as a global singleton.

  The main instance can be imported as a standard module:
  import ViewportManager from 'utils/ViewportManager'

  Access to the underlying class is still available if needed:
  import { ViewportManager } from 'utils/ViewportManager'
*/

import ViewportManager from './ViewportManager'

import config from '@/config'

const instance = new ViewportManager( config.ViewportManagerAutobind )

export { ViewportManager }
export default instance
