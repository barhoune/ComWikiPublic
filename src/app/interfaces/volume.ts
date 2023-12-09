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
  concepts: Concept[]
  count_of_issues: number
  date_added: string
  date_last_updated: string
  deck: any
  description: string
  first_issue: FirstIssue
  id: number
  image: Image
  issues: Issue[]
  last_issue: LastIssue
  locations: Location[]
  name: string
  objects: Object[]
  people: People[]
  publisher: Publisher
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

export interface Concept {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
  count: string
}

export interface FirstIssue {
  api_detail_url: string
  id: number
  name: string
  issue_number: string
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

export interface Issue {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
  issue_number: string
}

export interface LastIssue {
  api_detail_url: string
  id: number
  name: string
  issue_number: string
}

export interface Location {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
  count: string
}

export interface Object {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
  count: string
}

export interface People {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
  count: string
}

export interface Publisher {
  api_detail_url: string
  id: number
  name: string
}
