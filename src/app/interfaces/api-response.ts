import { Character } from "./character"
import { Characters } from "./characters"

export interface ApiResponse {
  error: string
  limit: number
  offset: number
  number_of_page_results: number
  number_of_total_results: number
  status_code: number
  results: Characters[]
  version: string
}
