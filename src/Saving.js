import React from "react";
import $ from "jquery";

function Saving({ match, history }) {

  const path = history.location.pathname;

  if (path === '/saving') {
    $("#backgroundStack").addClass("saving-height");
    $("#backgroundStack-solidColor").addClass("saving-height");
    $("#backgroundStack-gradient").addClass("saving-height");
  }

  return (
    <div className="saving-block">
      <div className="container">
        <div id="saving">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="saving-title">Saving</h1>
              <h5 className="saving-description">One Saving per Account!<br />
                The longer you saving the higher the APY. However you won't be able to withdraw funds until the duration has passed.
                <br />
              </h5>
            </div>
          </div>
          <div className="row justify-content-center mt-5 saving-detail">
            <div className="col-lg-6 col-md-12 mb-3">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                  <div className="h-100 card">
                    <div className="card-header">
                      <h5>BSCY amount</h5>
                    </div>
                    <div className="card-body">
                      <div className="h2 font-weight-bold text-mono">-.----------</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                  <div className="h-100 card">
                    <div className="card-header">
                      <h5>My Saving</h5>
                    </div>
                    <div className="card-body">
                      <div>
                        <table>
                          <tbody><tr>
                              <td>
                                <strong>1) Saving: </strong>
                              </td>
                              <td>-.--- BSCY</td>
                            </tr>
                            <tr>
                              <td><strong>2) Reward: </strong></td>
                              <td>-.--- BSCY</td>
                            </tr>
                            <tr>
                              <td><strong>3) Start day: </strong></td>
                              <td>N/A</td>
                            </tr>
                            <tr>
                              <td><strong>4) Pay day: </strong></td>
                              <td>N/A</td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-3">
              <div className="card">
                <div className="card-header">
                  <h5>Saving Amount</h5>
                </div>
                <div className="card-body">
                  <div>
                    <div className="mb-3 input-group">
                      <input placeholder={0} type="number" className="text-center form-control" />
                      <div className="input-group-append"><span className="input-group-text">BSCY</span><button className="main-btn">MAX</button></div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h5>Saving Duration</h5>
                    <div className="saving-btn-group">
                      <div aria-label="Basic example" role="group" className="btn-group saving-desktop">
                        <button className="main-btn-light active">11days (MIN)</button>
                        <button className="main-btn-light">1month</button>
                        <button className="main-btn-light">3months</button>
                        <button className="main-btn-light">6months</button>
                        <button className="main-btn-light">12months (MAX)</button>
                      </div>
                      <div aria-label="Basic example" role="group" className="saving-mobile">
                        <button className="main-btn-light active">11days (MIN)</button>
                        <button className="main-btn-light">1month</button>
                        <button className="main-btn-light">3months</button>
                        <button className="main-btn-light">6months</button>
                        <button className="main-btn-light">12months (MAX)</button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">After <span className="font-weight-bold text-success">30days</span> you will able to claim <span className="font-weight-bold text-success">-.- BSCY</span> || <span className="font-weight-bold text-success">NaN%</span> ROI</div>
                </div>
                <div className="text-center card-footer"><button className="main-btn" disabled>Saving for -.- BSCY</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saving;
