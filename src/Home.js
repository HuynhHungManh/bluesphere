import React from "react";
import StageHeader from "./StageHeader";

function Home() {

  return (
		<div className="home-page">
			<div className="price-box">
		    <div className="row">
		      <h2 className="text-primary font-weight-bold kimochi-box"><small className="text-white custom">BSCYield Price: </small><span className="price-text">$1.43<span /></span></h2>
		    </div>
		    <div className="row">
		      <h4 className="text-primary font-weight-bold btn-kimochi-box">
		        <a className="mr-2" target="_blank" href="https://exchange.pancakeswap.finance/?_gl=1*gg5zmn*_ga*MTA2OTUzMzA2Ni4xNjEzMzg4ODc3*_ga_334KNG3DMQ*MTYxMzgzMjYxOS4xNi4xLjE2MTM4MzI3NDcuMA..#/swap?inputCurrency=0x4da95bd392811897cde899d25face253a424bfd4&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56">
		          <button className="btn btn-danger btn-kimochi">Buy BSCY with BUSD</button>
		        </a>
		        <a target="_blank" href="https://exchange.pancakeswap.finance/?_gl=1*gg5zmn*_ga*MTA2OTUzMzA2Ni4xNjEzMzg4ODc3*_ga_334KNG3DMQ*MTYxMzgzMjYxOS4xNi4xLjE2MTM4MzI3NDcuMA..#/swap?inputCurrency=0x4da95bd392811897cde899d25face253a424bfd4&outputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c">
		          <button className="btn btn-danger btn-kimochi">Buy BSCY with WBNB</button>
		        </a>
		      </h4>
		    </div>
		    <div className="row row-balance">
		      <div className="col-lg-6 col-md-6 col-sm-12 mb-3 child-balance">
		        <div className="home-card card">
		          <div className="card-body">
		            <div className="home-balance">
		              <p className="text-over">0</p>
		              <p className="price">$0</p>
		            </div>
		            <div className="home-title">
		              Your Balance
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-6 col-md-6 col-sm-12 mb-3 child-balance">
		        <div className="home-card card">
		          <div className="card-body">
		            <div className="home-balance">
		              <p className="text-over">548,105.93</p>
		              <p className="price">$751,201.66</p>
		            </div>
		            <div className="home-title">
		              Circulating Supply
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
      <StageHeader/>
		</div>
  );
}

export default Home;
