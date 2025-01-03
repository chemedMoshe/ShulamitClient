import { NavLink } from "react-router";
import { listLinks } from "../../Utils/allLinksFunc";

export default function Navbarr() {
  return (
    <div>
      {listLinks.map((link) => (
          <NavLink to={link.link}>{link.mame}</NavLink>
      ))}
    </div>
  )
}
