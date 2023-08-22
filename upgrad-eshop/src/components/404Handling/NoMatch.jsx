import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="center fill">

      <p><b>Nothing to see here!</b><br /><Link to="/">Click here to go to the home page</Link></p>



    </div>
  );
}