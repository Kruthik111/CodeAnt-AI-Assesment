import Logo from "../../assets/Logo.png";
import "./sidebar.css";
import { useState } from "react";

// Icons
import { LiaHomeSolid } from "react-icons/lia";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { TbBook2 } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

interface NavItemProps {
  text: string;
  icon: React.ReactNode;
  selectedNav: number;
  navkey: number;
  setselectedNav: React.Dispatch<React.SetStateAction<number>>;
}

const NavItems: React.FC<NavItemProps> = ({
  icon,
  text,
  selectedNav,
  navkey,
  setselectedNav,
}) => {
  return (
    <li
      style={{ listStyleType: "none" }}
      onClick={() => setselectedNav(navkey)}
    >
      <div className={`navitem ${selectedNav === navkey && "selected-nav"}`}>
        {icon}
        <p>{text}</p>
      </div>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const [selectedNav, setselectedNav] = useState(1);
  const [open, setOpen] = useState(true);
  return (
    <div className="sidebar">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="" />
          <h1>CodeAnt AI</h1>
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <RxHamburgerMenu size={25} /> : <IoMdClose size={25} />}
        </div>
      </div>
      <div className="nav-container">
        <div className={`profile-btn ${open && "hide"}`}>
          <p>UtkarshDhairyaPanwar</p>
          <IoIosArrowDown size={20} />
        </div>
        <div className={`navbar ${open && "hide"}`}>
          <nav>
            <ul>
              <div className="items">
                <div className="items-top">
                  <NavItems
                    icon={<LiaHomeSolid size={25} />}
                    text={"Repository"}
                    selectedNav={selectedNav}
                    navkey={1}
                    setselectedNav={setselectedNav}
                  />
                  <NavItems
                    icon={<IoCodeSlashOutline size={20} />}
                    text={"AI Code Review"}
                    selectedNav={selectedNav}
                    navkey={2}
                    setselectedNav={setselectedNav}
                  />
                  <NavItems
                    icon={<IoIosCloudOutline size={20} />}
                    text={"Cloud Security"}
                    selectedNav={selectedNav}
                    navkey={3}
                    setselectedNav={setselectedNav}
                  />
                  <NavItems
                    icon={<TbBook2 size={20} />}
                    text={"How to Use"}
                    selectedNav={selectedNav}
                    navkey={4}
                    setselectedNav={setselectedNav}
                  />
                  <NavItems
                    icon={<GoGear size={20} />}
                    text={"Settings"}
                    selectedNav={selectedNav}
                    navkey={6}
                    setselectedNav={setselectedNav}
                  />
                </div>
                <div className="items-top">
                  <NavItems
                    icon={<IoCallOutline size={20} />}
                    text={"Support"}
                    selectedNav={selectedNav}
                    navkey={7}
                    setselectedNav={setselectedNav}
                  />
                  <Link
                    to={"/"}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <NavItems
                      icon={<FiLogOut size={20} />}
                      text={"Logout"}
                      selectedNav={selectedNav}
                      navkey={8}
                      setselectedNav={setselectedNav}
                    />
                  </Link>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
