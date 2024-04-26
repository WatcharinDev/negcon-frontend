import { authOptions } from "@/app/api/auth/authoptions";
import { getServerSession } from "next-auth";

const UtilityServices = {
    UploadPostImage: async (data: any) => {
        const session = await getServerSession(authOptions)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/post/image`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${session?.user?.access_token}`,
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                },
                body: data
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(`Server error:status:${result.statusCode} message: ${result.message} detail:${result.details}`);
            }
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
            if (error instanceof Response) {
                console.error('Response status:', error.status);
                const errorMessage = await error.text();
                console.error('Server error message:', errorMessage);
            }
        }
    }
}
export default UtilityServices