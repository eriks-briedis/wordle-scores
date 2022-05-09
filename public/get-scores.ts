import config from './config'
import type { ScoresResponse } from './models'

const getRealScoresFromNetwork = async () => {
  const headers = new Headers({
    'X-Authorization': config.token
  })

  return await fetch(`${config.apiUrl}/scores`, {
    method: 'GET',
    headers
  })
}

export async function getScores(): Promise<ScoresResponse> {
  console.debug('getting scores…')

  const response = await getRealScoresFromNetwork()

  if (response.ok) {
    const json = await response.json()
    return json as ScoresResponse
  } else {
    throw new Error('failed to get scores')
  }
}
