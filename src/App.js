import "./App.css";
import Flowchart from "./components/flowchart";
import {atom, useRecoilState, useRecoilValue } from "recoil";

const reposState = atom({
  key: "repos",
  default: []
})

function App() {
const [repos, setRepos] =useRecoilState(reposState)

  return <Flowchart />;
}

export default App;
