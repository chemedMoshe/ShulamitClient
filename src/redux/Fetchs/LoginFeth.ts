export const loginFunc = async (email: string, password: string) => {
    try {
        const response = await fetch('http://localhost:2021/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password}),
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