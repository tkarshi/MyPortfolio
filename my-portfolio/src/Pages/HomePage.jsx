import styled from "styled-components";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// import UserImage from "../Images/user3.png";

function HomePage() {
  return (
    <HomePageStyle className="row vh-100 border">
      {/* Divide the pages into parts right and left */}
      <div className="col-lg-8 left-container"></div>
      <div className="col-lg-4 right-container">
        <div className="contact-container d-flex gap-3 mt-5 ms-5">
          Contact Me
          <div className="social-text">
            {/* Email */}
            <a
              href="mailto:example@gmail.com"
              className="social-item"
              key="gmail"
              target="_blank"
            >
              <SiGmail />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="social-item"
              key="linkedin"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              className="social-item"
              key="github"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        {/* <img src={UserImage} className="user-img" alt="User Image" /> */}
      </div>
    </HomePageStyle>
  );
}

const HomePageStyle = styled.div`
  .right-container {
    background-color: #fce65f;
    position: relative;

    .social-item {
      margin-left: 12px; /* Adjust the margin as needed */
      cursor: pointer;
      color: black;
      text-decoration: none;
      &:hover {
        transform: scale(1, 2);
        color: gray;
      }
    }

    .user-img {
      position: absolute;
      left: -60%;
      bottom: 0;
      height: 80%;
    }
  }
  .left-container {
    background-color: #032234;
  }
`;

export default HomePage;
