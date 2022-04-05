import React from "react";
import StoryItem from "./StoryItem";
import "./Story.css";

function Story() {
  const storyImage = [
    "https://video.kurashiru.com/production/articles/e93140a7-2051-491e-8ac8-3560aeffb155/wide_thumbnail_normal.png?1632957835",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU",
    "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/28/photo1648404450367-1648404450495163889594.jpg",
    "https://tk.ismcdn.jp/mwimgs/d/f/1140/img_df9fc21d2b005052fbb130d1c0e27702500588.jpg",
    "https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/3/12/edit-2749968355211281230224593872715142719349824n-16470969268901039170375.jpeg",
  ];
  const userAvatar = [
    "https://avatars2.githubusercontent.com/u/24712956?s-D400Su=b71527e605aelb748fc2d4157a842e57e427ad445v=4",
    "https://avatars2.githubusercontent.com/u/24712956?s-D400Su=b71527e605aelb748fc2d4157a842e57e427ad445v=4",
    "https://avatars2.githubusercontent.com/u/24712956?s-D400Su=b71527e605aelb748fc2d4157a842e57e427ad445v=4",
    "https://avatars2.githubusercontent.com/u/24712956?s-D400Su=b71527e605aelb748fc2d4157a842e57e427ad445v=4",
    "https://avatars2.githubusercontent.com/u/24712956?s-D400Su=b71527e605aelb748fc2d4157a842e57e427ad445v=4",
  ];
  const userName = [
    "Giang Ann",
    "Giang Ann",
    "FLC Mr.Quyet",
    "Giang Ann",
    "Giang Ann",
  ];

  const merge = (storyImage, userAvatar, userName) => {
    var mergeArr = [];
    for (let i = 0; i < storyImage.length; i++) {
      mergeArr.push({
        storyImage: storyImage[i],
        userAvatar: userAvatar[i],
        userName: userName[i],
      });
    }
    return mergeArr;
  };

  const storyItemData = merge(storyImage, userAvatar, userName);

  return (
    <div className="content__story">
      {storyItemData.map((component, index) => (
        <StoryItem
          key={index}
          storyImage={component.storyImage}
          userAvatar={component.userAvatar}
          userName={component.userName}
        />
      ))}
    </div>
  );
}

export default Story;
