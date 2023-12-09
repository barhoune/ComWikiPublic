import { Image } from "./image"
import { Publisher } from "./publisher"

export interface Series {
  api_detail_url: string
    deck: string
    image: Image
    id:number
    name: string
    publisher: Publisher
}


