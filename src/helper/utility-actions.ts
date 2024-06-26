'use server'

import UtilityServices from "@/services/utility/utility-services"

export const handleUploadPostImage = async (payload: any) => {
    try {
        const response = await UtilityServices.UploadPostImage(payload)
        if (!response) {
            return response
        }
        return response
    } catch (error) {   
        console.log(error)
    }

}

export const handleGetAllRoleUser=async()=>{
    'use server'
    try {
        const response = await UtilityServices.GetAllRoleUser()
        if (!response) {
            return null
        }
        return response
    } catch (error) {

    }
}