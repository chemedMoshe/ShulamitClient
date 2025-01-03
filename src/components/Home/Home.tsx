import { useEffect } from 'react';
import './Home.css'
import { useNavigate } from 'react-router';
export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/login');
            return
        }
    },[]);
   
    const name:string = JSON.parse(localStorage.getItem('user')!)?.name
  return (
    <div className="Home">
     <h1>שלום  {name}</h1>
    </div>
  )
}
