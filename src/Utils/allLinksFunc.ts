export interface ILink {
    name: string,
    link: string;
    isAdmin?:boolean
}

const listLinks: ILink[] = [
    { name: 'בית', link: '/' },
    {name:'מאמרים',link:'/post'},
    {name:'מזג אוויר זוגי',link:'/weather'},
    {name:"ניהול", link:"/manager", isAdmin:true}

];

export const getLinks = (isAdmin:boolean) => 
     isAdmin ? listLinks: listLinks.filter(link => !link.isAdmin)

