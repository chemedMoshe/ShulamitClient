export const loginFunc = async (email: string, password: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password}),
            credentials: "include",
        });

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); 
        localStorage.setItem('user', JSON.stringify(data));
        return data;
    } catch (error) {
        throw "ההתחברות כשלה";
    }
};

export const logoutFunc = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
        });

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        localStorage.removeItem('user');
        const data = await response.json(); 
        return data;
    } catch (error) {
        throw "ההתחברות כשלה";
    }
};