import Editor from "../../Components/Editor";
import "./CodeReview.css";

const CodeReview = () => {
  return (
    <div className="page-container codereview-container">
      <div style={{ flex: "1" }}>
        <Editor />
      </div>
    </div>
  );
};

export default CodeReview;
