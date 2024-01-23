import React, { Component } from "react";
import "./style.css";
import { navigationData } from "./NavigationData";
import { Link } from "react-router-dom";

export default class DashboardNavigation extends Component {
  state = {
    currentPath: "",
  };

  componentDidMount() {
    var path = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );
    if (path.toLowerCase() === "dashboard") {
      path = "";
    }

    this.setState({
      currentPath: path,
    });
  }
  render() {
    return (
      <div id="dashboard-nav">
        <div id="dashboard-nav-items">
          {navigationData.map((item, index) => {
            return (
              <div
                key={index}
                className={`dashboard-nav-item text-primary ${
                  item.path === this.state.currentPath ? "side-nav-active" : ""
                }`}
              >
                <Link
                  className="dashboard-nav-link"
                  to={item.path}
                  onClick={() => {
                    this.setState({ currentPath: item.path });
                  }}
                >
                  {item.icon}
                  <span className="dashboard-nav-title">{item.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
