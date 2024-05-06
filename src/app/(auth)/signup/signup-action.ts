'use server'

import SignupServices from "@/services/signup/signup-services"


export const handleSubmit=async(data:any)=>{
    'use server'
    try {
        const response = await SignupServices.SignUp(JSON.parse(data))
        if (!response) {
            return null
        }
        return response
    } catch (error) {

    }
}

export const onFinishFailed=async()=>{
    'use server'

}