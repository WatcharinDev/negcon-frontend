'use server'
import CommunityServices from "@/services/community/community-services"
import UserServices from "@/services/user/user-services"
import { revalidatePath } from "next/cache"

export const handleGetProfile = async (filter: any) => {

    try {
        const response = await UserServices.GetProfile()

        if (!response) {
            return null
        }
        return response
    } catch (error) {
        console.log(error)
    }

}

