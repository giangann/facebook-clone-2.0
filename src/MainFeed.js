import React from "react";
import MainFeedItems from "./MainFeedItems";

function MainFeed() {
  const userName = [
    "Intel Developer Zone",
    "Vietnam Business Insider",
    "KIEN THUC KINH TE",
  ];
  const userAvatar = [
    "https://avatars2.githubusercontent.com/u/24712956?s-D400Su=b71527e605aelb748fc2d4157a842e57e427ad445v=4",
    "https://avatars2.githubusercontent.com/u/24712956?s-D400Su=b71527e605aelb748fc2d4157a842e57e427ad445v=4",
    "https://avatars2.githubusercontent.com/u/24712956?s-D400Su=b71527e605aelb748fc2d4157a842e57e427ad445v=4",
  ];

  const userStatus = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
  ];

  const feedImage = [
    "/image/feeds1_image.jpg",
    "/image/feeds2_image.jpg",
    "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/276126901_374725814660397_4304743329158609536_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=Hf7tQ3nzw2gAX85Nx96&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_XCf3BmqTAzGqkxMKTW4KDk4z5cIxgximSdKP5bY8xcw&oe=624AC694",
  ];

  const feedItemsStatistic = [
    {
      timeStamp: 1,
      numOfInteract: 38,
      numOfComment: 29,
      numOfShare: 8,
    },
    {
      timeStamp: 1,
      numOfInteract: 38,
      numOfComment: 29,
      numOfShare: 8,
    },
    {
      timeStamp: 1,
      numOfInteract: 38,
      numOfComment: 29,
      numOfShare: 8,
    },
  ];

  const merge = (
    feedImage,
    userAvatar,
    userName,
    userStatus,
    feedItemsStatistic
  ) => {
    var mergeArr = [];
    for (let i = 0; i < feedImage.length; i++) {
      mergeArr.push({
        feedImage: feedImage[i],
        userAvatar: userAvatar[i],
        userName: userName[i],
        userStatus: userStatus[i],
        feedItemsStatistic: feedItemsStatistic[i],
      });
    }
    return mergeArr;
  };

  const feedItemsData = merge(
    feedImage,
    userAvatar,
    userName,
    userStatus,
    feedItemsStatistic
  );
  return (
    <div>
      {feedItemsData.map((component, index) => (
        <MainFeedItems
          key={index}
          feedImage={component.feedImage}
          userAvatar={component.userAvatar}
          userName={component.userName}
          userStatus={component.userStatus}
          feedItemsStatistic={component.feedItemsStatistic}
        />
      ))}
    </div>
  );
}

export default MainFeed;
