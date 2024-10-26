import { PermMedia } from '@mui/icons-material'
import './share.css'

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/Assets/profile.png" alt="" className="shareProfileImg" />
          <input
            placeholder="whats on your mind"
            type="text"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareoption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareoption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Emoji</span>
            </div>
            <div className="shareoption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Message</span>
            </div>
            <div className="shareoption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Post</button>
        </div>
      </div>
    </div>
  )
}
