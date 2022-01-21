import { getHeaderVerb } from '$lib/util'

export function getSession() {
  return {
    headerVerb: getHeaderVerb()
  } 
}