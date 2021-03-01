import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item desktop">
						<img src="_pics/logo.png" width="150px" alt="Wiresphere" className="stage-logo" />
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="./index.html">HOME</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">FARMING-V2 <span className="soon-box">soon</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./saving.html">SAVING </a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">NFT <span className="soon-box">soon</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">BSCYSWAP<span className="soon-box">soon</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#" target="_blank">DOCS</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#" target="_blank">Buy BSCYield</a>
					</li>
					<li className="nav-item">
						<button type="button" className="btn btn-unlock">Unlock Wallet</button>
					</li>
				</ul>
			</div>
		</nav>
  );
}

export default Nav;
