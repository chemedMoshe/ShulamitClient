export const registerFunc = async (email: string, password: string, name: string) => {
    try {
        const response = await fetch('http://localhost:2021/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        });
        const data = await response.json(); 

        if (response.status !== 201) {
            throw (`${data.error}`);
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};