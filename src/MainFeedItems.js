import React, { useState } from "react";
import "./MainFeedItems.css";
import ReplyAllRoundedIcon from "@mui/icons-material/ReplyAllRounded";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import TagFacesRoundedIcon from "@mui/icons-material/TagFacesRounded";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import { useStateValue } from "./StateProvider";
import db from "./firebaseConfig";

function MainFeedItems({
  feedImage,
  userAvatar,
  userName,
  userStatus,
  feedItemsStatistic,
  feedId,
}) {
  const [{ user }, setUser] = useStateValue();
  console.log(user);

  const [postStatistic, setPostStatistic] = useState({
    isLiked: feedItemsStatistic.listUserInteract.includes(user.displayName),
    listUserInteract: feedItemsStatistic.listUserInteract,
    numOfInteract: feedItemsStatistic.listUserInteract.length,
  });

  console.log(postStatistic.listUserInteract);

  // handle when user click like button
  // if user have liked it before: isLiked: false,
  // else isLiked: true, list.append(user.displayName),
  //  numOfInteract+1
  const handleInteract = () => {
    if (postStatistic.isLiked) {
      const tempPostStatistic = {
        isLiked: !postStatistic.isLiked,
        listUserInteract: postStatistic.listUserInteract.filter(
          (iterator) => iterator !== user.displayName
        ),
        numOfInteract: postStatistic.numOfInteract - 1,
      };
      setPostStatistic(tempPostStatistic);
    } else {
      const tempPostStatistic = {
        isLiked: !postStatistic.isLiked,
        listUserInteract: [...postStatistic.listUserInteract, user.displayName],
        numOfInteract: postStatistic.numOfInteract + 1,
      };
      setPostStatistic(tempPostStatistic);
    }
    console.log("update state of browser")
  };

  // update statistic of current post to storage
  const updateStorage = async () => {
    // make ref to document (curr post)
    const postRef = db.collection("feed").doc(feedId);
    // create request to update
    console.log(postStatistic.listUserInteract)
    const res = await postRef.update({
      feedItemsStatistic:{
        ...feedItemsStatistic,
        listUserInteract: postStatistic.listUserInteract
      }
    });
  };

  updateStorage()

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
        <img src={feedImage} alt="This is some thing to describe" />
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
            <span>{postStatistic.numOfInteract} </span>
            <span>
              <span>{feedItemsStatistic.numOfComment} comments </span>
              <span style={{ marginLeft: "10px" }}>
                {feedItemsStatistic.numOfShare} shares
              </span>
            </span>
          </div>
        </div>

        <div className="feedItems__action">
          <ThumbUpOutlinedIcon
            onClick={handleInteract}
            className={
              postStatistic.isLiked
                ? "feedItems__action--liked"
                : "feedItems__action--disliked"
            }
          />
          <MarkChatUnreadOutlinedIcon />
          <ReplyAllRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default MainFeedItems;
