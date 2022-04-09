import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import db from "./firebaseConfig";
import MainFeedItems from "./MainFeedItems";
import _ from "lodash";

function MainFeed() {
  const [feedItemsData, setFeedItemsData] = useState([]);
  const [reRender, setReRender] = useState(1)

  useEffect(() => {
    db.collection("feed").onSnapshot( (snapshot) =>
      setFeedItemsData(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
    sortFeedByDate(feedItemsData)
  }, [reRender]);

  const sortFeedByDate = () => {
    const sortFeedList = _.orderBy(
      feedItemsData,
      component =>component.data.feedItemsStatistic.timeStamp,
      ["asc"]
    );
    console.log("sortFeedList",sortFeedList)
    setFeedItemsData(sortFeedList);
  };

  // sortFeedByDate();
  console.log("feedItemsData",feedItemsData)

  return (
    <div>
      <CreatePost />

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
