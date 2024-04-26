import { response_data } from "@/models/response"
import UserServices from "@/services/user/user-services"

export const handleGetProfile = async () => {
    try {
        const response:response_data = await UserServices.GetProfile()
        if (!response) {
            return null
        }
        return response
    } catch (error) {
        console.log(error)
    }

}