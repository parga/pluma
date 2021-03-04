import { useHistory } from "react-router-dom";

export function Home () {
  const history = useHistory();
  const navigate = (url) => history.push(url);
  return (<>
    <button className='p-btn--primary' onClick={() => navigate("/firstName")}>Let's start</button>
  </>)
}
