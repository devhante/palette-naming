import React from "react";
import "./Header.css";
import paletteIcon from "../palette.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-wrap">
        <img className="palette-icon" src={paletteIcon} />
        <div className="title">팀 팔레트 에셋 네이밍 컨벤션 헬퍼</div>
      </div>
    </div>
  );
}
