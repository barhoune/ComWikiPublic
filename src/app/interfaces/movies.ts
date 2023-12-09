import { Image } from "./image"
import { Publisher } from './publisher';

export interface Movies {
  api_detail_url: string
  deck: string
  image: Image
  name: string
  id:number
  publisher: Publisher
}
