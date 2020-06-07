import React from "react";
import "../stylesheet/card.css";
import Card from "./Card";

const ProfilePage = props => {
  const { email, username, bio, image } = props.user;
  return (
    <div className="profilepage">
      <div className="part1">
        <img className="profilepic" alt="profile" src={image} />
        <div className="profinfo">
          <h2 className="prof1">User</h2>
          <h1 className="prof2">{username}</h1>
          <p className="prof3">{bio}</p>
        </div>
      </div>
      <div className="part2">
        <h2 className="prof1">Email</h2>
        <p className="prof4">{email}</p>
        <h2 className="prof1 plist">Playlists</h2>
        <div className="playlst">
          <Card pname="Spider Man" songno="15" />
          <Card pname="Workout" songno="20" />
          <Card pname="Chill" songno="50" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
