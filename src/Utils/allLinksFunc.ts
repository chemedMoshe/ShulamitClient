export interface ILink {
    name: string,
    link: string;
}

export const listLinks: ILink[] = [
    { name: 'בית', link: '/' },
    {name:'מאמרים',link:'/post'},
    {name:'שאלות ותשובות',link:'/faq'}

];

export const returnLinks = () => {
    return listLinks
};
