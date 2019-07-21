import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import list from './assets/list.svg';
import chart from './assets/chart.svg';
import music from './assets/music.svg';
import play from './assets/play.svg';
import play2 from './assets/play2.svg';
import stop from './assets/stop.svg';
import add from './assets/add.svg';
import radioEmpty from './assets/radio-empty.svg';

function App() {
  return (
    <div className="App">
      <div className="App_leftCol">
        <div className="leftCol_addItemBlock">
          <input className="addItemBlock_input" placeholder="add a new mission…" />
          <div className="addItemBlock_addBtn" role="button"><img alt="" src={add} /></div>
        </div>
        <div className="leftCol_currentItemBlock">
          <div>
            <div className="currentItemBlock_item">
              <div className="item_check"><img alt="" src={radioEmpty} /></div>
              <div className="item_content">
                <h2>the First thing to do today</h2>
                <div><img alt="" src={radioEmpty} /></div>
              </div>
            </div>
            <h2 className="currentItemBlock_time">25:00</h2>
          </div>

        </div>
        <div className="leftCol_itemsListBlock">
          <div>
            <div className="itemListBlock_listItem">
              <div className="listItem_checkbox"><img alt="" src={radioEmpty} /></div>
              <div className="listItem_title">the second thing to do today</div>
              <div className="listItem_playBtn"><img alt="" src={play2} /></div>
            </div>
            <div className="itemListBlock_listItem">
              <div className="listItem_checkbox"><img alt="" src={radioEmpty} /></div>
              <div className="listItem_title">the third thing to do today</div>
              <div className="listItem_playBtn"><img alt="" src={play2} /></div>
            </div>
            <div className="itemListBlock_listItem">
              <div className="listItem_checkbox"><img alt="" src={radioEmpty} /></div>
              <div className="listItem_title">the forth thing to do today</div>
              <div className="listItem_playBtn"><img alt="" src={play2} /></div>
            </div>
          </div>
          <a className="itemListBlock_moreLink" href="/">MORE</a>
        </div>
      </div>
      <div className="App_centerCol">
        <div className="centerCol_circle">
          <div className="circle_actBtnBlock">
            <div className="actBtnBlock_playBtn" role="button"><img alt="" src={play} /></div>
            <div className="actBtnBlock_stopBtn" role="button"><img alt="" src={stop} /></div>
          </div>
        </div>
      </div>
      <nav className="App_rightCol">
        <div className="rightCol_topBlock">
          <div className="topBlock_btn" role="button"><img alt="" src={list} /></div>
          <div className="topBlock_btn" role="button"><img alt="" src={chart} /></div>
          <div className="topBlock_btn" role="button"><img alt="" src={music} /></div>
        </div>
        <div className="rightCol_bottomBlock">
          <h1>POMODORO</h1>
        </div>
      </nav>
    </div>
  );
}

export default App;
