import { BiPlus, BiRefresh } from "react-icons/bi";
import projects, { Project } from "../../Context/data";
import "./Repository.css";
import { CiSearch } from "react-icons/ci";
import "./Repository.css";
import { useEffect, useState } from "react";
import { CiFolderOff } from "react-icons/ci";

interface BadgeProp {
  text: string;
}

const Badge: React.FC<BadgeProp> = ({ text }) => {
  return <div className="badge">{text}</div>;
};

const EmptyRepos = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <CiFolderOff size={70} />
      <p>Sorry, we dont have any such repositories to show</p>
    </div>
  );
};

interface RepoCardProps {
  repo: {
    name: string;
    visibility: "Public" | "Private";
    technology: string;
    size: string;
    lastUpdated: string;
  };
}

const ReposCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className=" repocard">
      <div className=" repo-card-top">
        <p>{repo.name}</p>
        <Badge text={repo.visibility} />
      </div>
      <div className=" repo-card-bottom">
        <p>{repo.technology}</p>
        <span
          style={{
            backgroundColor: "blue",
            borderRadius: "50%",
            maxHeight: "4px",
            maxWidth: "4px",
          }}
        >
          .
        </span>
        <p>{repo.size}</p>
        <p>{repo.lastUpdated}</p>
      </div>
    </div>
  );
};

function Repository() {
  // Set the title as Repository
  document.title = "CodeAnt AI | Repositories";

  // To display only those repos which are in searched value
  const [displayRepository, setDisplayRepository] = useState<Project[]>([]);

  const [search, setSearch] = useState("");
  function refresh() {
    window.location.reload();
  }

  // Filtering those task which are in serached value

  useEffect(() => {
    if (search) {
      var dummyRepos: any[] = projects.filter((task) =>
        task.name.toLowerCase().includes(search.toLowerCase())
      );
      setDisplayRepository([...dummyRepos]);
      return;
    }
    setDisplayRepository([...projects]);
  }, [projects, search]);

  return (
    <div className="page-container repo-container">
      <div className="repo-container-top">
        <div className="repo-details">
          <h1 style={{ fontSize: "29px" }}>Repositories</h1>
          <p>{projects && projects.length} total repositories</p>
          <div className="search">
            <CiSearch size={20} />
            <input
              type="search"
              name="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search Repositories"
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "7px" }}>
          <button
            className="repo-buttons bg-white refresh-btn"
            onClick={refresh}
          >
            <BiRefresh size={20} />
            Refresh All
          </button>
          <button className="repo-buttons bg-blue">
            <BiPlus />
            Add Repository
          </button>
        </div>
      </div>
      <div className="repo-container-bottom">
        {displayRepository && displayRepository.length > 0 ? (
          displayRepository.map((repo, index): any => {
            return <ReposCard key={index} repo={repo} />;
          })
        ) : (
          <EmptyRepos />
        )}
      </div>
    </div>
  );
}

export default Repository;
