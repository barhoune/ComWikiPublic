import { Image } from "./image"
import { Publisher } from "./publisher"

export interface Volumes {
  api_detail_url: string
  id:number
  deck: string
  image: Image
  name: string
  publisher: Publisher
}
