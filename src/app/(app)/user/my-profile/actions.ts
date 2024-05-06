'use server'

import UserServices from "@/services/user/user-services"

export const handleGetMyProfile = async () => {
    const response=await UserServices.GetProfile()
    return response
}