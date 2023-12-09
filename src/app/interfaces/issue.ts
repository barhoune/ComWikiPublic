import { Image } from "./image"
import { Volumes } from "./volumes"

export interface Issue {
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
  image: Image
  cover_date: string
  date_added: string
  date_last_updated: string
  deck: any
  volume: Volumes
  description: string
  first_appearance_characters: any
  first_appearance_concepts: any
  first_appearance_locations: any
  first_appearance_objects: any
  first_appearance_storyarcs: any
  first_appearance_teams: any
  has_staff_review: boolean
  id: number
  issue_number: string
  name: string
  site_detail_url: string
  store_date: any
}
