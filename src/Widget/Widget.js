import React from "react";
import "./Widget.css";

function Widget() {
  const contactsList = [
    {
      userImage: "/public",
    },
  ];
  return (
    <div className="widget">

      {/* First Area: Sponsored */}
      <div className="widget__sponsored">
        <div className="widget__title">
          <p>Sponsored</p>
        </div>
        <d
        iv className="widget__item--sponsored">
          <div className="widget__image">
            <img
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t45.1600-4/264074796_23849346531550167_1114851032059413095_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=105&ccb=1-5&_nc_sid=67cdda&_nc_ohc=0uZk9MloGI8AX9h5Eob&_nc_ht=scontent.fhan4-1.fna&oh=00_AT_HADcdMS91x_srGX0Cv3DC02WnBuJIpa-CUKtvUoLx_g&oe=625F2982"
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
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t45.1600-4/264074796_23849346531550167_1114851032059413095_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=105&ccb=1-5&_nc_sid=67cdda&_nc_ohc=0uZk9MloGI8AX9h5Eob&_nc_ht=scontent.fhan4-1.fna&oh=00_AT_HADcdMS91x_srGX0Cv3DC02WnBuJIpa-CUKtvUoLx_g&oe=625F2982"
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
            <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2" alt="" />
          </div>
          <div className="widget__content">
            <p>Peter Parker</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2" alt="" />
          </div>
          <div className="widget__content">
            <p>Ngọc Ngọc</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2" alt="" />
          </div>
          <div className="widget__content">
            <p>Alexander Arnold</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2" alt="" />
          </div>
          <div className="widget__content">
            <p>Rumelo Lukaku</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2" alt="" />
          </div>
          <div className="widget__content">
            <p>Song Huyn Myun</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2" alt="" />
          </div>
          <div className="widget__content">
            <p>Herry Kane</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2" alt="" />
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
            <img src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/75419123_564777364348086_3823493033517645824_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=100&ccb=1-5&_nc_sid=02e273&_nc_ohc=fSfvoQ8UeCoAX-W99jQ&_nc_ht=scontent.fhan4-3.fna&oh=03_AVIItm3MAQg7ATLuxeO4UWXEEE0Zm2LwPreFdYt_nU9htg&oe=627F87B4" alt="" />
          </div>
          <div className="widget__content">
            <p>B3-407</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/75419123_564777364348086_3823493033517645824_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=100&ccb=1-5&_nc_sid=02e273&_nc_ohc=fSfvoQ8UeCoAX-W99jQ&_nc_ht=scontent.fhan4-3.fna&oh=03_AVIItm3MAQg7ATLuxeO4UWXEEE0Zm2LwPreFdYt_nU9htg&oe=627F87B4" alt="" />
          </div>
          <div className="widget__content">
            <p>VSAMI &lt;3</p>
          </div>
        </div>
        <div className="widget__item">
          <div className="widget__image">
            <img src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/75419123_564777364348086_3823493033517645824_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=100&ccb=1-5&_nc_sid=02e273&_nc_ohc=fSfvoQ8UeCoAX-W99jQ&_nc_ht=scontent.fhan4-3.fna&oh=03_AVIItm3MAQg7ATLuxeO4UWXEEE0Zm2LwPreFdYt_nU9htg&oe=627F87B4" alt="" />
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
