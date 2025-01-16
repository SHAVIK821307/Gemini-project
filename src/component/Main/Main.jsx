import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPromt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, SuSi</span>
              </p>
              <p>How can I help you ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming trip</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming trip</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming trip</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPromt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            {/* <p>{resultData}</p> */}
          </div>
        </div> }

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter promt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            please cross-check it's response;
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;