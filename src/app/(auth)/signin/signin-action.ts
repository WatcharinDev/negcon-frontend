import SigninServices from "@/app/services/signin/signin-services"

export const onFinish=async(data:any)=>{
    'use server'
    try {
        const response = await SigninServices.SignIn(data)
        console.log(response)
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