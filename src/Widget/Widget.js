import React from "react";
import { importAll } from "../SampleData/HeaderSampleObject";
import "./Widget.css";

function Widget() {
  // return array of image address ()

  const contactsImage = importAll(
    require.context(
      "../../public/image/Widget_Image/Contacts",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const sponsoredImage = importAll(
    require.context(
      "../../public/image/Widget_Image/Sponsored",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const groupImage = importAll(
    require.context(
      "../../public/image/Widget_Image/GroupConservation",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="widget">
      {/* First Area: Sponsored */}
      <div className="widget__sponsored">
        <div className="widget__title">
          <p>Sponsored</p>
        </div>
        <d iv className="widget__item--sponsored">
          <div className="widget__image">
            <img
              src={sponsoredImage[1]}
              alt=""
            />
          </div>
          <div className="widget__content">
            <p>Find IT / Web engineering jobs in Japan!</p>
            <p>global.findy-code.io</p>
          </div>
        </d>
        <div className="widget__item--sponsored">
          <div className="widget__image">
            <img
              src={sponsoredImage[1]}
              alt=""
            />
          </div>
          <div className="widget__content">
            <p>Find IT / Web engineering jobs in Japan!</p>
            <p>global.findy-code.io</p>
          </div>
        </div>
      </div>

      {/* Second Area: Contact */}
      <div className="widget__contact">
        <div className="widget__title">
          <p>Contacts</p>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src={contactsImage[1]} alt="" />
          </div>
          <div className="widget__content">
            <p>Peter Parker</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src={contactsImage[0]} alt="" />
          </div>
          <div className="widget__content">
            <p>Ngọc Ngọc</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src={contactsImage[1]} alt="" />
          </div>
          <div className="widget__content">
            <p>Alexander Arnold</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src={contactsImage[2]} alt="" />
          </div>
          <div className="widget__content">
            <p>Rumelo Lukaku</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src={contactsImage[3]} alt="" />
          </div>
          <div className="widget__content">
            <p>Song Huyn Myun</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src={contactsImage[4]} alt="" />
          </div>
          <div className="widget__content">
            <p>Herry Kane</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src={contactsImage[5]} alt="" />
          </div>
          <div className="widget__content">
            <p>Kevin De Bruyne</p>
          </div>
        </div>
      </div>
      <div className="widget__groupConservations">
        <div className="widget__title">
          <p>Group conversations</p>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img
              src={groupImage[0]}
              alt=""
            />
          </div>
          <div className="widget__content">
            <p>B3-407</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img
              src={groupImage[1]}
              alt=""
            />
          </div>
          <div className="widget__content">
            <p>VSAMI &lt;3</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img
              src={groupImage[2]}
              alt=""
            />
          </div>
          <div className="widget__content">
            <p>X-men 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
