export interface IreturnLinks {
    mame: string,
    link: string;
}

export const listLinks: IreturnLinks[] = [
    { mame: 'Home', link: '/' },
    { mame: 'Login', link: '/login' },
    { mame: 'Register', link: '/register' },
];

export const returnLinks = ()=>{
const user = localStorage.getItem('user')
return user?listLinks.filter((link)=>(link.link!=='/login'&& link.link!=='/register')):listLinks
}
