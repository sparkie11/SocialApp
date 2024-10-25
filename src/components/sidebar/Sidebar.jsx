import { RssFeed } from "@mui/icons-material"
import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem"> <RssFeed className="sidebarIcon"/>
                 <span className="sidebarListItemText"> Feed </span> </li>
                 <li className="sidebarListItem"> <RssFeed className="sidebarIcon"/>
                 <span className="sidebarListItemText"> Feed </span> </li>
                 <li className="sidebarListItem"> <RssFeed className="sidebarIcon"/>
                 <span className="sidebarListItemText"> Feed </span> </li>
                 <li className="sidebarListItem"> <RssFeed className="sidebarIcon"/>
                 <span className="sidebarListItemText"> Feed </span> </li>
                 <li className="sidebarListItem"> <RssFeed className="sidebarIcon"/>
                 <span className="sidebarListItemText"> Feed </span> </li>
            </ul>
        </div>
    </div>
  )
}
