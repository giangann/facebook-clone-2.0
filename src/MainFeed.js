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
          // check timeStamp field value is null
          doc.data().feedItemsStatistic.timeStamp
            ? {
                // if not null, set data = doc.data
                id: doc.id,
                data: doc.data(),
              }
            : {
                // if null, change timeStamp with return value of .now() method
                id: doc.id,
                data: {
                  feedImage: doc.data().feedImage,
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

  return (
    <div>
      <CreatePost />

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
