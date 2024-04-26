import SigninServices from "@/services/signin/signin-services"


export const onFinish=async(data:any)=>{
    'use server'
    try {
        const response = await SigninServices.SignIn(data)
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