import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router';
import { RootState, useAppDispatch } from '../../redux/store';
import { registerFetch } from '../../redux/ExtraRedusers/RegisterExtraReduser';
import { useSelector } from 'react-redux';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

export default function RegisterCard() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const[nameError, setNameError] = React.useState(false);
    const[nameErrorMessage, setNameErrorMessage] = React.useState('');
    const dispatch = useAppDispatch();  
    const navigate = useNavigate(); 
    const nameUser =  useSelector((state:RootState)=> state.myUser.name);

React.useEffect(() => {
   if(nameUser){
    navigate('/login');
    return
   }
}, [nameUser]);

   
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (emailError || passwordError||nameError) {
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        dispatch(registerFetch({ email: data.get('email') as string, password: data.get('password') as string, name: data.get('name') as string }));
    };

    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const name = document.getElementById('name') as HTMLInputElement;
        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        }
        if(!name.value){
            setNameError(true);
            setNameErrorMessage('Please enter a valid name.');
            isValid = false;
        }
         else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    const clearErrors = (e: string | null) => {
        if (e) return;
        setEmailError(false);
        setEmailErrorMessage('');
        setPasswordError(false);
        setPasswordErrorMessage('');
        setNameError(false);
        setNameErrorMessage('');
    };

    return (
        <Card variant="outlined" className="Login" sx={{ width: "70%" }}>
            <Typography
                component="h1"
                variant="h4"
                sx={{ width: '80%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
                הרשמה
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
            >
                <FormControl>
                    <TextField
                        error={nameError}
                        helperText={nameErrorMessage}
                        id="name"
                        name="name"
                        label="Name"
                        autoComplete="name"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={nameError ? 'error' : 'primary'}
                        onChange={(e) => clearErrors(e.target.value)}
                    />
                </FormControl>
                   
                <FormControl>
                    <TextField
                        error={emailError}
                        helperText={emailErrorMessage}
                        id="email"
                        type="email"
                        name="email"
                        label="Email"
                        autoComplete="email"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={emailError ? 'error' : 'primary'}
                        onChange={(e) => clearErrors(e.target.value)}
                    />   
                </FormControl>
                
                <FormControl>
                    <TextField
                        error={passwordError}
                        helperText={passwordErrorMessage}
                        name="password"
                        type="password"
                        id="password"
                        label="Password"
                        autoComplete="current-password"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={passwordError ? 'error' : 'primary'}
                        onChange={(e) => clearErrors(e.target.value)}
                    />
                </FormControl>

                <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
                    הכנס
                </Button>
               
                <Typography sx={{ textAlign: 'center' }} >
                    יש לך כבר חשבון?{" "}
                    
                    <Link to={"/login"}>כניסה</Link>
                </Typography>
            </Box>
        </Card>
    );
}
