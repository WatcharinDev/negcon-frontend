'use server'
import CommunityServices from "@/app/services/community/community-services"
import { revalidatePath } from "next/cache"

export const handleAddPost = async (payload: any) => {
    try {
        const response = await CommunityServices.Add(payload)
        if (!response) {
            return response
        }
        revalidatePath('/community',"page")
        return response
    } catch (error) {   
        console.log(error)
    }

}

export const handleGetAllPost = async (filter: any) => {
    try {
        const response = await CommunityServices.GetAll(filter)
        if (!response) {
            return null
        }
        return response
    } catch (error) {   
        console.log(error)
    }

}