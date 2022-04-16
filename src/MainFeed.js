import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import db from "./firebaseConfig";
import MainFeedItems from "./MainFeedItems";
import _ from "lodash";

function MainFeed() {
  const [feedItemsData, setFeedItemsData] = useState([]);

  useEffect(() => {
    db.collection("feed").onSnapshot((snapshot) =>
      setFeedItemsData(
        snapshot.docs.map((doc) => ({
          // if not null, set data = doc.data
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    // sort feeds list by timeStamp (time created)
    const sortFeedList = _.orderBy(
      feedItemsData,
      (component) => component.data.feedItemsStatistic.timeStamp,
      ["desc"]
    );

    // update feedItemsData again
    setFeedItemsData(sortFeedList);
  }, []);

  console.log("feedListLength: ", feedItemsData);
  return (
    <div>
      <CreatePost feedItemsData={feedItemsData} />

      {feedItemsData.map((component, index) => (
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
