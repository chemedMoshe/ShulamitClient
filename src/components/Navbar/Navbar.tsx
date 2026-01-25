import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { NavLink, useNavigate } from 'react-router';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { ILink, getLinks } from '../../Utils/allLinksFunc';
import { logUotReducer } from '../../redux/ExtraRedusers/LoginExtraReduser';
import { clearPosts } from '../../redux/Slice/PostSlice';
import { useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from "@mui/icons-material/Login";




export default function PrimarySearchAppBar() {
    const idUser = useSelector((state: RootState) => state.myUser._id);
    const isAdmin = useSelector((state: RootState) => state.myUser.isAdmin);
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();
    const [isLogin, setIsLogin] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        useState<null | HTMLElement>(null);
    const [allLinks, setAllLinks] = useState<ILink[]|[]>([]);  

    const handleLogout = () => {
        appDispatch(logUotReducer())
        dispatch(clearPosts())
        navigate('/login');
    }

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsLogin(true);
        }
        else {
            setIsLogin(false);
        }
    }, [idUser]);

    useEffect(() => {
        const newLinks = getLinks(isAdmin);
        setAllLinks(newLinks);
    }, [isAdmin]);

    const navigate = useNavigate();
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>{isLogin?"Logout":""}</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    
                </IconButton>
                <p onClick={() => navigate('/post')}>מאמרים</p>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                </IconButton>
                <p onClick={() => navigate('/weather')}>מזג אוויר זוגי</p>
            </MenuItem>
            {isAdmin && <MenuItem onClick={handleMenuClose}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                </IconButton>
                <p onClick={() => navigate('/manager')}>ניהול</p>
            </MenuItem>}
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#f78799' }}>
                <Toolbar>
                    {!isLogin ? <Button
                        className='LoginButton'
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => navigate('/login')}
                        sx={{ marginRight: '2%' }}                    >
          <LoginIcon sx={{ color: '#1976d2', cursor: 'pointer' }} />
                    </Button> :
                    <Button onClick={handleLogout}><LogoutIcon sx={{ color: '#1976d2', cursor: 'pointer' }} /></Button>
                    }
                    <Box sx={{ flexGrow: 1 }} />
                    
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {allLinks.map((link:ILink) =>
                            <NavLink to={link.link} className='link' key={link.link}>{link.name}</NavLink>
                            
                        )}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}