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
import { loginReduser } from '../../redux/ExtraRedusers/LoginExtraReduser';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../redux/Slice/UserSlice';

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

export default function SignInCard() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const idUser = useSelector((state: RootState) => state.myUser._id);
    const errorMessage = useSelector((state: RootState) => state.myUser.error);
    const appDispatch = useAppDispatch();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/');
        }
    }, [idUser]);

    React.useEffect(() => {
        dispatch(clearError());
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (emailError || passwordError) {
            return;
        }
        appDispatch(loginReduser({ email: (document.getElementById('email') as HTMLInputElement).value, password: (document.getElementById('password') as HTMLInputElement).value }));
        const data = new FormData(event.currentTarget);
       
    };

    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;

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
        } else {
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
    };

    return (
        <Card variant="outlined" className="Login" sx={{ width: "70%" }}>
            <Typography
                component="h1"
                variant="h4"
                sx={{ width: '80%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
            >
                התחברות
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
            >
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
                    אין לך עדיין חשבון?{" "}

                    <Link to={"/register"}>צור חשבון</Link>
                </Typography>
                {errorMessage && <Typography sx={{ textAlign: 'center', color: 'red' }} >{errorMessage}</Typography>}
            </Box>
        </Card>
    );
}
