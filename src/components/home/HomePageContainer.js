import React from "react";
import "./HomePageContainer.scss";
import iphone from "../../media/iphone.png";
import { BlogList } from "./BlogList";
import PropTypes from "prop-types";


export const HomePageContainer = ({ children }) => {
  return (

    <>

      <main className="home-page-grid">
        <div className="gray-bar" />
        <img alt="An Iphone" id="iphone" src={iphone} />
        <div className="dark-background"><div/></div>
        <div className="home-headercontent-container">
          <h1 id="sign-up" className="massive-text semi-bold white" >
            You Can Close 35% More Home Advisor Leads, Easy
          </h1>
          <p className="subtitle white">
            Get to the leads first with automated texting. Close more, chase
            less. Be the first to join by getting an automated alert for when
            we launch.
          </p>
          {children}
        </div>
      </main>
      <section>
        <BlogList />
      </section>
    </>
  );
};

HomePageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

