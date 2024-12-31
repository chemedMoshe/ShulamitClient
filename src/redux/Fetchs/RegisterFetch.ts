export const registerFunc = async (email: string, password: string, name: string) => {
    try {
        const response = await fetch('http://localhost:2021/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); 
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};