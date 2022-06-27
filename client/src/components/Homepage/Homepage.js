import "./homepage.css";
import logo from "../../assets/img/freelance.png";
import logo2 from "../../assets/img/letsfreelance.png";

export default (props) => {
  return (
    <div className="container">
      <div className="intro-row row clearfix">
        <div className="intro-left col-sm-6">
          <div className="intro-text">
            <h1>A place for You to find the service you are looking for</h1>
            <p>
              Find the Freelancer you are looking for right now! It's at your fingertips
            </p>
          </div>
          {!props.isLoggedIn && (
              <div className="intro-buttons">
                <a href="/login" className="ui button primary">
                  Login!
                </a>
              </div>
          )}
        </div>
        <div className="intro-right col-sm-6">
          <img className="titlePicture" src={logo} alt="freelance" />
        </div>
        <div className="intro-row row">
          <div className="intro-right col-sm-6">
            <img className="titlePicture" src={logo2} alt="freelance" />
          </div>
          <div className="intro-left col-sm-6">
            <div className="intro-text">
              <h1>A place for You to offer Your services</h1>
              <p>
                It has never been so easy to start freelancing, just give it a try!
              </p>
            </div>
            {!props.isLoggedIn && (
              <div className="intro-buttons">
                <a href="/registration" className="ui button primary">
                  Sign-Up!
                </a>
              </div>
            )}
            {props.isLoggedIn && (
              <div className="intro-buttons">
                <a href="/createCrowdFounding" className="ui button primary">
                  Create a Freelance!
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
