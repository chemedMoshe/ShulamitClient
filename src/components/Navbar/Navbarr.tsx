import { NavLink } from "react-router";
import { getLinks } from "../../Utils/allLinksFunc";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


export default function Navbarr() {
  const isAdmin = useSelector((state:RootState) => state.myUser.isAdmin)
  return (
    <div>
      {getLinks(isAdmin).map((link) => (
          <NavLink to={link.link}>{link.name}</NavLink>
      ))}
    </div>
  )
}
