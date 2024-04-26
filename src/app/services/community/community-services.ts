import { authOptions } from "@/app/api/auth/authoptions";
import { getServerSession } from "next-auth";

const CommunityServices = {
    GetAll: async (data: any) => {
        const session = await getServerSession(authOptions)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/get/all?page=1&size=10`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.access_token}`,
                },
                cache: 'no-store',
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
    },
    Add: async (data: { username: string, password: string }) => {
        const session = await getServerSession(authOptions)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.access_token}`,
                },
                cache: 'no-store',
                body: JSON.stringify(data)
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
export default CommunityServices