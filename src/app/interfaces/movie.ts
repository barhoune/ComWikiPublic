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
  api_detail_url: string
  box_office_revenue: string
  budget: string
  characters: Character[]
  concepts: Concept[]
  date_added: string
  date_last_updated: string
  deck: string
  description: string
  distributor: any
  has_staff_review: any
  id: number
  image: Image
  locations: Location[]
  name: string
  objects: Object[]
  producers: Producer[]
  rating: string
  release_date: string
  runtime: string
  site_detail_url: string
  studios: Studio[]
  teams: Team[]
  total_revenue: string
  writers: Writer[]
}

export interface Character {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Concept {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
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

export interface Location {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Object {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Producer {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Studio {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Team {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Writer {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}
