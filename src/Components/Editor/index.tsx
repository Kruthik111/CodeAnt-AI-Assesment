import EditorHeader from "./EditorHeader";
import "./editor.css";

const Editor = () => {
  return (
    <div className="editor-container">
      <div>
        <EditorHeader />
      </div>
      <div
        style={{
          padding: "5px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <textarea
          style={{
            width: "100%",
            maxWidth: "980px",
            height: "95%",
            minHeight: "363px",
            fontSize: "20px",
            fontWeight: "700",
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
