export interface SearchResponse {
  aliases?: string
  api_detail_url: string
  birth?: string
  count_of_issue_appearances: number
  date_added: string
  date_last_updated: string
  deck?: string
  description?: string
  first_appeared_in_issue: FirstAppearedInIssue
  gender: number
  id: number
  image: Image
  name: string
  origin?: Origin
  publisher: Publisher
  real_name?: string
  site_detail_url: string
  resource_type: string
}

export interface FirstAppearedInIssue {
  api_detail_url: string
  id: number
  name?: string
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

export interface Origin {
  api_detail_url: string
  id: number
  name: string
}

export interface Publisher {
  api_detail_url: string
  id: number
  name: string
}
