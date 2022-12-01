import { data } from '../data/data'

export const getTopics = () => {
  const topics = []
  for ( let key in data) {
    topics.push(key)
  }
  return topics
}