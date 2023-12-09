import { Characters } from "./characters";
import { Image } from "./image";
import { Publisher } from "./publisher";
export interface Character extends Characters{
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
  aliases: string
  api_detail_url: string
  birth: any
  count_of_issue_appearances: number

  date_added: string
  date_last_updated: string
  deck: string
  description: string

  gender: number
  id: number
  image: Image

  issues_died_in: any[]

  name: string

  publisher: Publisher
  real_name: string
  site_detail_url: string
  story_arc_credits: any[]

}

