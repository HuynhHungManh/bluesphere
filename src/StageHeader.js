import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function StageHeader() {
  return (
		<div className="stage-header">
      <h1>BSC Yield</h1>
      <h2 id="stage-header-tagline">
        <span>Binance Smart Chain</span>
        <span>Non-fungible token</span>
        <span>Farming V-2</span>
        <span>Pancake Swap</span>
        <span>Multiple Wallet</span>
      </h2>
    </div>
  );
}

export default StageHeader;
