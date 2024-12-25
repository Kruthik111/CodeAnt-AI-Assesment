import "./Badge.css";

interface BadgeProp {
  text: string;
}

const index: React.FC<BadgeProp> = ({ text }) => {
  return <div className="badge">{text}</div>;
};

export default index;
