export interface Root {
  error: string
  limit: number
  offset: number
  number_of_page_results: number
  number_of_total_results: number
  status_code: number
  results: Results
  version: string
}

export interface Results {
  aliases: any
  api_detail_url: string
  characters: Character[]
  count_of_episodes: number
  date_added: string
  date_last_updated: string
  deck: string
  description: string
  episodes: Episode[]
  first_episode: FirstEpisode
  id: number
  image: Image
  last_episode: LastEpisode
  name: string
  publisher: any
  site_detail_url: string
  start_year: string
}

export interface Character {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
  count: string
}

export interface Episode {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
  episode_number: string
}

export interface FirstEpisode {
  api_detail_url: string
  id: number
  name: string
  episode_number: string
}

export interface Image {
  icon_url: string
  medium_url: string
  screen_url: string
  screen_large_url: string
  small_url: string
  super_url: string
  thumb_url: string
  tiny_url: string
  original_url: string
  image_tags: string
}

export interface LastEpisode {
  api_detail_url: string
  id: number
  name: string
  episode_number: string
}
