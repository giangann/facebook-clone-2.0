import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import db from "./firebaseConfig";
import MainFeedItems from "./MainFeedItems";
import _ from "lodash";
import firebase from "firebase";

function MainFeed() {
  const [feedItemsData, setFeedItemsData] = useState([]);
  const [reRender, setReRender] = useState(1);

  useEffect(() => {
    db.collection("feed").onSnapshot((snapshot) =>
      setFeedItemsData(
        snapshot.docs.map((doc) =>
          doc.data().feedItemsStatistic.timeStamp
            ? {
                id: doc.id,
                data: doc.data(),
              }
            : {
                id: doc.id,
                data: {
                  feedImage:
                    "https://scontent.fhan7-1.fna.fbcdn.net/v/t39.30808-6/277570817_538392347645804_872732488301493782_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=xsMcYVcxHp0AX-sGhJA&_nc_ht=scontent.fhan7-1.fna&oh=00_AT9smRF2omnG0eJbZ9mn2rb8XutXiU0L4zvpPO30fDEnkg&oe=62540B88",
                  userAvatar: doc.data().userAvatar,
                  userName: doc.data().userName,
                  userStatus: doc.data().userStatus,
                  feedItemsStatistic: {
                    timeStamp: firebase.firestore.Timestamp.now(),
                    numOfInteract: doc.data().feedItemsStatistic.numOfInteract,
                    numOfComment: doc.data().feedItemsStatistic.numOfComment,
                    numOfShare: doc.data().feedItemsStatistic.numOfShare,
                  },
                },
              }
        )
      )
    );
  }, []);

  const sortFeedList = _.orderBy(
    feedItemsData,
    (component) => component.data.feedItemsStatistic.timeStamp,
    ["desc"]
  );
  console.log(sortFeedList);

  // rerender after add collection to avoid null
  const handleReRender = () => {
    setReRender(reRender + 1);
    console.log("ReRender called");
  };

  return (
    <div>
      <CreatePost handleReRender={handleReRender} />

      {sortFeedList.map((component, index) => (
        <MainFeedItems
          key={index}
          feedImage={component.data.feedImage}
          userAvatar={component.data.userAvatar}
          userName={component.data.userName}
          userStatus={component.data.userStatus}
          feedItemsStatistic={component.data.feedItemsStatistic}
        />
      ))}
    </div>
  );
}

export default MainFeed;
