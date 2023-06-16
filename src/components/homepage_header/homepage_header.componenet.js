import { Link } from "react-router-dom";
import FileUploadComponent from "../upload/uploadFile.component";
import "../homepage_header/HomepageHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function HomePageHeader() {
  const profileIcon = <FontAwesomeIcon icon={faUser} />;
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="logo">
          <Link className="navbar-brand" to={"/dashboard"}>
            PDF
          </Link>
          <div className="search-form">
            <form class="d-flex align-items-center" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="file-upload">
            <FileUploadComponent />
          </div>

          <div className="navbar-right" style={{ marginLeft: "600px" }}>
            <div className="profile">
              <i className="fas fa-user-circle fa-lg">
                <Link to={"/profile"}>{profileIcon}</Link>
              </i>{" "}
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default HomePageHeader;
