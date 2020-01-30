import React from "react";
import "./blogs.scss";
import backgroundRight from "../../media/angled-decoration.svg";
import backgroundLeft from "../../media/background-left.svg";
import { Link } from "gatsby"


export const BlogList = () => {
    return (
      <div className="blogs">
          <Link  to={`blog`}>
            <div
              // style={
              //   index % 2 === 0
              //     ? { backgroundImage: "url(" + backgroundLeft + ")" }
              //     : { backgroundImage: "url(" + backgroundRight + ")" }
              // }
              className="blog-list-container center"
            >
              <h3 className="secondary-title semi-bold ">I'm a title</h3>
              <p className="body-text">READ THIS BLOG IF</p>
              <p className="subtitle semi-bold">I'm a snippet!</p>
              <img />
              <p className="click-to-read body-text">Click To Read</p>
            </div>
          </Link>
      </div>
    );
};


