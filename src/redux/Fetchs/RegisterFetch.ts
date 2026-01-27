export const registerFunc = async (email: string, password: string, name: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        });
        const data = await response.json(); 

        if (data.error) {
           throw (`${data.error}`);
        }

        return data;
    } catch (error) {
        console.error('Error:', error);
        throw `${error}`;
    }
};