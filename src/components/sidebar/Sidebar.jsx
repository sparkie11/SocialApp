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
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/Assets/bik1.png" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/Assets/bike2.png" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Jake Doe</span>
                </li>                <li className="sidebarFriend">
                    <img src="/Assets/bike3.png" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Jane Doe</span>
                </li>                <li className="sidebarFriend">
                    <img src="/Assets/bike4.png" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/Assets/bike2.png" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Jake Doe</span>
                </li>                <li className="sidebarFriend">
                    <img src="/Assets/bike3.png" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Jane Doe</span>
                </li>                <li className="sidebarFriend">
                    <img src="/Assets/bike4.png" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName"> Jane Doe</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
