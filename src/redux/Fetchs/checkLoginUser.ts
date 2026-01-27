export const checkIfLoggedUserFunc = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/is-logged-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
        });

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
        return data;
    } catch (error) {
        throw "ההתחברות כשלה";
    }
};

export const logoutFunc = async () => {
    try {
        const response = await fetch('http://localhost:2021/auth/logout', {
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