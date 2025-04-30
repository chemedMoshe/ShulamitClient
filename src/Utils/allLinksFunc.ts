export interface ILink {
    name: string,
    link: string;
}

export const listLinks: ILink[] = [
    { name: 'בית', link: '/' },
    {name:'מאמרים',link:'/post'},
    {name:'מזג אוויר זוגי',link:'/weather'},

];

export const returnLinks = () => {
    return listLinks
};
