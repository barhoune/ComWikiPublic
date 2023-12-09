import { Image } from "./image"
import { Publisher } from "./publisher"

export interface Characters {
  api_detail_url: string
  count_of_issue_appearances: number
  deck: string
  description: string
  gender: number
  id: number
  image: Image
  name: string
  publisher: Publisher
}
