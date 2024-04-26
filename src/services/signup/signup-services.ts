const SignupServices = {
    SignUp: async (data:any) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
                body:JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result: any = response.json();
            return result
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}
export default SignupServices