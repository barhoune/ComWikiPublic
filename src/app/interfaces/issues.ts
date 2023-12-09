import { Image } from "./image"
import { Publisher } from "./publisher"
import { Volumes } from "./volumes"

export interface Issues {
  api_detail_url: string
  deck: string
  image: Image
  name: string
  publisher: Publisher
  issue_number:number
  volume: Volumes
  count_of_issue_appearances: number
  description: string
  gender: number
  id: number

}
