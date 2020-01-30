import React from "react";
import "./Nav.scss";
import { PropTypes } from "prop-types";
import { Location } from '@reach/router';
import {Link} from "gatsby"


export const Nav = ({ handleInputClass, location }) => {
  console.log(location)

  if(location)
    return (
      <div className={`nav-container home-page-grid ${location.pathname !== "/" ? 'unset-height' : ''}`}>
        <nav id='main-nav'
             className={location.pathname !== "/" ? 'unset-clippath' : ""}>
          {location.pathname === "/" ? (
            <a
              href='#sign-up'
              className="subtitle white cta link"
              onClick={() => handleInputClass()}
            >
              Sign Up For Beta
            </a>
          ) : (
            <Link
              to="/"
              className="subtitle white cta link"
              onClick={() => handleInputClass()}
            >
              Sign Up For Beta
            </Link>
          )}
        </nav>
      </div>
    );

  else{
    return(
      <div className='nav-container home-page-grid unset-height'>
        <nav id='main-nav'
             className='unset-clippath'>
            <Link
              to="/"
              className="subtitle white cta link"
            >
              Sign Up For Beta
            </Link>
          )}
        </nav>
      </div>
    )
  }
  }


Nav.propTypes = {
  handleInputClass: PropTypes.func,
  location: PropTypes.obj
};
