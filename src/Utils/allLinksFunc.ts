export interface ILink {
    name: string,
    link: string;
    protected?:boolean
}

const listLinks: ILink[] = [
    { name: 'בית', link: '/' },
    {name:'מאמרים',link:'/post'},
    {name:'מזג אוויר זוגי',link:'/weather'},
    {name:'גרף זוגי',link:'/graph'},
    {name:"ניהול", link:"/manager", protected:true}

];

export const getLinks = (isAdmin:boolean) => 
     isAdmin ? listLinks: listLinks.filter(link => !link.protected)

