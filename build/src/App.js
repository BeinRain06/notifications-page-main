// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  Mark,
  Angela,
  Jacob,
  Rizky,
  Kimberly,
  Nathan,
  Anna,
  chessImage,
} from "./assets/images";

function Notification() {
  return (
    <div className="all_users_post">
      <div className="noti_container">
        <div className="noti_content1">
          {/* <div className="my_img">
            <img src={Mark} alt="Oops Lost1!" className="img_show" />
          </div> */}
          <div className="reaction_made">
            <div className="user_post">
              <div className="layer_user">
                <div className="my_img">
                  <img src={Mark} alt="Oops Lost1!" className="img_show" />
                </div>
                <p>
                  <span className="name_user">
                    <strong>Mark Webber</strong>
                  </span>
                  <span className="my_react">reacted to your recent post</span>
                  <span className="topic">My first tournament today!</span>
                </p>
                <div className="dot"></div>
              </div>
              <p className="theTime">1m ago</p>
              {/* <div className="picture">
                <img
                  src={props.feature.pictureCommented}
                  alt="Oops Lost2!"
                  className="picture_commented"
                />
              </div> */}
            </div>
            {/* <div className="message">
              <p className="priv_message"></p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="noti_container">
        <div className="noti_content1">
          {/* <div className="my_img">
            <img src={Angela} alt="Oops Lost1!" className="img_show" />
          </div> */}
          <div className="reaction_made">
            <div className="user_post">
              <div className="layer_user">
                <div className="my_img">
                  <img src={Angela} alt="Oops Lost1!" className="img_show" />
                </div>
                <p>
                  <span className="name_user">
                    <strong>Angela Gray</strong>
                  </span>
                  <span className="my_react">followed you</span>
                  <span className="topic"></span>
                </p>
                <div className="dot"></div>
              </div>
              <p className="theTime">5m ago</p>
              {/* <div className="picture">
                <img
                  src={props.feature.pictureCommented}
                  alt="Oops Lost2!"
                  className="picture_commented"
                />
              </div> */}
            </div>
            {/* <div className="message">
              <p className="priv_message"></p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="noti_container">
        <div className="noti_content1">
          {/* <div className="my_img">
            <img src={Jacob} alt="Oops Lost1!" className="img_show" />
          </div> */}
          <div className="reaction_made">
            <div className="user_post">
              <div className="layer_user">
                <div className="my_img">
                  <img src={Jacob} alt="Oops Lost1!" className="img_show" />
                </div>
                <p>
                  <span className="name_user">
                    <strong>Jacob Thompson</strong>
                  </span>
                  <span className="my_react">
                    has joined your group Chess Club
                  </span>
                  <span className="topic"></span>
                </p>
                <div className="dot"></div>
              </div>
              <p className="theTime">1 day ago</p>
              {/* <div className="picture">
                <img
                  src={props.feature.pictureCommented}
                  alt="Oops Lost2!"
                  className="picture_commented"
                />
              </div> */}
            </div>
            {/* <div className="message">
              <p className="priv_message"></p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="noti_container">
        <div className="noti_content1">
          {/* <div className="my_img">
            <img src={Rizky} alt="Oops Lost1!" className="img_show" />
          </div> */}
          <div className="reaction_made">
            <div className="user_post">
              <div className="layer_user">
                <div className="my_img">
                  <img src={Rizky} alt="Oops Lost1!" className="img_show" />
                </div>
                <p>
                  <span className="name_user">
                    <strong>Rizky Hasanuddin</strong>
                  </span>
                  <span className="my_react">sent you a private message</span>
                  <span className="topic"></span>
                </p>
                <div className="dot"></div>
              </div>
              <p className="theTime">5 days ago</p>
              {/* <div className="picture">
                <img
                  src={props.feature.pictureCommented}
                  alt="Oops Lost2!"
                  className="picture_commented"
                />
              </div> */}
            </div>
            <div className="message">
              <p className="priv_message">
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and i'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="noti_container">
        <div className="noti_content1">
          {/* <div className="my_img">
            <img src={Kimberly} alt="Oops Lost1!" className="img_show" />
          </div> */}
          <div className="reaction_made">
            <div className="user_post">
              <div className="layer_user">
                <div className="my_img">
                  <img src={Kimberly} alt="Oops Lost1!" className="img_show" />
                </div>
                <p>
                  <span className="name_user">
                    <strong>Kimberly Smith</strong>
                  </span>
                  <span className="my_react">commented on your picture</span>
                  <span className="topic"></span>
                </p>
                <div className="dot"></div>
              </div>
              <p className="theTime">1 week ago</p>
              <div className="picture">
                <img
                  src={chessImage}
                  alt="Oops Lost2!"
                  className="picture_commented"
                />
              </div>
            </div>
            {/* <div className="message">
              <p className="priv_message"></p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="noti_container">
        <div className="noti_content1">
          {/* <div className="my_img">
            <img src={Nathan} alt="Oops Lost1!" className="img_show" />
          </div> */}
          <div className="reaction_made">
            <div className="user_post">
              <div className="layer_user">
                <div className="my_img">
                  <img src={Nathan} alt="Oops Lost1!" className="img_show" />
                </div>
                <p>
                  <span className="name_user">
                    <strong>Nathan Peterson</strong>
                  </span>
                  <span className="my_react">reacted to your recent post</span>
                  <span className="topic">
                    5 end-game strategies to increase your win rate
                  </span>
                </p>
                <div className="dot"></div>
              </div>
              <p className="theTime">2 weeks ago</p>
              {/* <div className="picture">
                <img
                  src={props.feature.pictureCommented}
                  alt="Oops Lost2!"
                  className="picture_commented"
                />
              </div> */}
            </div>
            {/* <div className="message">
              <p className="priv_message"></p>
            </div> */}
          </div>
        </div>
      </div>
      <div className="noti_container">
        <div className="noti_content1">
          {/* <div className="my_img">
            <img src={Anna} alt="Oops Lost1!" className="img_show" />
          </div> */}
          <div className="reaction_made">
            <div className="user_post">
              <div className="layer_user">
                <div className="my_img">
                  <img src={Anna} alt="Oops Lost1!" className="img_show" />
                </div>
                <p>
                  <span className="name_user">
                    <strong>Anna Kim</strong>
                  </span>
                  <span className="my_react">left the group Chess Club</span>
                  <span className="topic"></span>
                </p>
                <div className="dot"></div>
              </div>
              <p className="theTime">2 weeks ago</p>
              {/* <div className="picture">
                <img
                  src={props.feature.pictureCommented}
                  alt="Oops Lost2!"
                  className="picture_commented"
                />
              </div> */}
            </div>
            {/* <div className="message">
              <p className="priv_message">Hi! I'm gone</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

class ShowBoardNotification extends React.Component {
  render() {
    return (
      <div className="main_container">
        <div className="show_content">
          <button className="btn_update">
            <div className="hyphen"></div>
            <h4>Update</h4>
          </button>
          <div className="title_page">
            <div className="title">
              <h3>Notifications</h3>
              <div className="unread">
                <p className="remain_unreaded">3</p>
              </div>
            </div>
            <div className="mark_noti">
              <button className="mark_all_read">Mark all as read</button>
            </div>
          </div>
          <Notification />
          {/* <Notifications /> */}
          <div className="attribution">
            Challenged By
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            Coded By.
            <a href="#">Be In Rain 06</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBoardNotification;

/* export default ShowBoardNotification; */
