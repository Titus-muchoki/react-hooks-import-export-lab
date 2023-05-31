import React from "react";

function Tweet() {
    const currentTime = new Date().toString();
  
    // this returns JSX!
    return (
      <div className="tweet">
        <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
        <div className="tweet__body">
          <p>We are writing this tweet in JSX. Holy moly!</p>
          <p>{Math.floor(Math.random() * 100)} retweets </p>
          <p>{currentTime}</p>
        </div>
      </div>
    );
  }
  export default Tweet;