export interface response_data_community_list{
    status_code:number
    data:any[]
    count: number,
    page: number,
    size: number,
    message: string
}
export interface community_list {
    posts_id: number
    posts_profile_img:string
    posts_user_code: string
    posts_user_name:string
    posts_content: string
    posts_images: string
    posts_status: string
    posts_likes:string
    posts_created_by: string
    posts_created_at: string
    posts_update_by: string
    posts_update_at: string
  }