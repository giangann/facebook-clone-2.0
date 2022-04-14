import React from "react";
import "./MainFeedItems.css";
import ReplyAllRoundedIcon from "@mui/icons-material/ReplyAllRounded";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import TagFacesRoundedIcon from "@mui/icons-material/TagFacesRounded";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import ProcessImage from "./ProcessImage";

function MainFeedItems({
  feedImage,
  userAvatar,
  userName,
  userStatus,
  feedItemsStatistic,
}) {
  
  const handleDisplayImage = (src) =>{
    URL.revokeObjectURL(src)
  }

  return (
    <div className="mainFeed__items">
      <div className="feedItems__top">
        <div className="feedItems__userAvatar">
          <img src={userAvatar} alt="" />
        </div>
        <div>
          <span className="feedItems__userName">{userName}</span>
          <div className="feedItems__timeStamp">
            {new Date(feedItemsStatistic.timeStamp?.toDate()).toUTCString()}
          </div>
        </div>
      </div>
      <div className="feedItems__mid">
        <div className="feedItems__userStatus">{userStatus}</div>
        <img src = {process.env.PUBLIC_URL + `${feedImage}`} onLoad={handleDisplayImage(process.env.PUBLIC_URL + `${feedImage}`)} />
      </div>
      <div className="feedItems__bottom">
        <div>
          <div className="feedItems__interact">
            <RecommendRoundedIcon />
            <TagFacesRoundedIcon
              style={{ boxSizing: " border-box", marginLeft: "-8px" }}
            />
          </div>
          <div className="feedItems__numOfInteract">
            <span>{feedItemsStatistic.numOfInteract} </span>
            <span>
              <span>{feedItemsStatistic.numOfComment} comments </span>
              <span style={{ marginLeft: "10px" }}>
                {feedItemsStatistic.numOfShare} shares
              </span>
            </span>
          </div>
        </div>

        <div className="feedItems__action">
          <ThumbUpOutlinedIcon />
          <MarkChatUnreadOutlinedIcon />
          <ReplyAllRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default MainFeedItems;
