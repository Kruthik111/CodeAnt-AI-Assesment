import imgsrc from "../../assets/image.png";
import Logo from "../../assets/Logo.png";
import subtract from "../../assets/Subtract.png";
import "./Login.css";
import { useNavigate } from "react-router";
import { useState } from "react";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaGitlab } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";

interface IconButtonProps {
  text: string;
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text }) => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/repository");
  }

  return (
    <button className="login-btn" onClick={handleClick}>
      <span>{icon}</span>
      <p>{text}</p>
    </button>
  );
};

const Tab1 = () => {
  return (
    <>
      <IconButton
        icon={<FaGithub size={16} color="black" />}
        text="Sign in with Github"
      />
      <IconButton
        icon={<FaBitbucket size={16} color="blue" />}
        text="Sign in with Bitbucket"
      />
      <IconButton
        icon={<VscAzureDevops size={16} color="blue" />}
        text="Sign in with Azure Devops"
      />
      <IconButton
        icon={<FaGitlab size={16} color="orange" />}
        text="Sign in with Gitlab"
      />
    </>
  );
};

const Tab2 = () => {
  return (
    <>
      <IconButton
        icon={<FaGitlab size={16} color="orange" />}
        text="Self Hosted GitLab"
      />
      <IconButton
        icon={<IoKeyOutline size={16} color="black" />}
        text="Sign in with SSO"
      />
    </>
  );
};
export default function Login() {
  // Set the title as Login
  document.title = "CodeAnt AI | Login";
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="container">
      <div className="left-container">
        <img src={imgsrc} alt="" />
        <div className="bg-logo">
          <img src={subtract} style={{ maxWidth: "100%" }} />
        </div>
      </div>
      <div className="right-container">
        <div className="login-container">
          <div className="login-container-top">
            <div id="title">
              <img src={Logo} alt="" />
              <h1>CodeAnt AI</h1>
            </div>
            <h1 className="greet">Welcome to CodeAnt AI</h1>
            <div className="top-buttons-layout">
              <button
                className={`${activeTab == 1 ? "activeBtn" : "inActiveBtn"}`}
                onClick={() => setActiveTab(1)}
              >
                SAAS
              </button>
              <button
                className={`${activeTab == 2 ? "activeBtn" : "inActiveBtn"}`}
                onClick={() => setActiveTab(2)}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <div className="tab-container">
            {activeTab == 1 ? <Tab1 /> : <Tab2 />}
          </div>
        </div>
        <p id="terms">
          By signing up you agree to the <b>Privacy Policy</b>.
        </p>
      </div>
    </div>
  );
}
