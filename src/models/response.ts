export interface response_message{
    statusCode:number
    message:string
}
export interface response_file{
    statusCode:number
    url:string
    message:string
}
export interface response_data{
    statusCode:number
    data:any
    message:string
}
export interface response_data_list{
    statusCode:number
    data:any
    count:number
    page:number
    size:number
    message:string
}