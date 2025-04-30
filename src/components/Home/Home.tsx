//import { useEffect } from 'react';
import './Home.css'
//import { useNavigate } from 'react-router';


export default function Home() {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!localStorage.getItem('user')) {
    //         navigate('/login');
    //         return
    //     }
    // },[]);
   
    const name:string = JSON.parse(localStorage.getItem('user')!)?.name
  return (
    <div className="Home">
     <h2>!שלום  {name}</h2>
     <div>
      ברוכים הבאים לאתר חיבור והתקשרות הנשמות 
      <br/>
      כאן תוכלו ליצור קשר עם מטפלת ומדריכת זוגות מנוסה בצורה אינטימית וחסרת תקדים
      <br/>
      אין לך מה לדאוג לגבי הפרטים האישיים, הכל חסוי כמובן, ומה שנשאר זה רק להתחיל ליהנות מעולם של רגש קשר ופוריות הנפש.
     </div>
     <div>
      תמיד הרגשת בפנים עמוק שיכול להיות יותר טוב? שיכול להיות שאם קצת אחרת היינו אז החיים היו שונים בתכלית?
      <br/>
      שאם היינו מסוגלים לומר דברים היינו במקום אחר אך אנחנו לא יודעים איך לומר?
      <br/>
      אין מה לדאוג, אתם לא היחידים, כולנו באותו מקום , אין בנו שום בעיה מלבד חסרון ידיעה והיכרות עמוקה עם עצמנו 
     </div>
    </div>
  )
}
