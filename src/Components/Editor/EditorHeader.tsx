import "./editor.css";

// Required Icons importing
import { IoPlayOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const EditorHeader = ({ file = "file.jsx" }) => {
  return (
    <div className="editor-header">
      <div id="filesName">{file}</div>
      <div className="header-icons">
        <IoPlayOutline size={23} />
        <IoSearch size={23} />
        <IoClose size={23} />
      </div>
    </div>
  );
};

export default EditorHeader;
