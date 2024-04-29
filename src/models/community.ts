export interface response_data_community_list{
    status_code:number
    data:any[]
    count: number,
    page: number,
    size: number,
    message: string
}
export interface community_list {
    post_id: number
    post_user_code: string
    post_user_name: string
    post_profile_img: string
    post_content: string
    post_images: string[]
    post_likes: string[]
    post_status: boolean
    post_created_by: string
    post_created_at: string
    post_update_by: string
    post_update_at: string
  }