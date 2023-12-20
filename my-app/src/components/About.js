import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3>About</h3>
      <p>About page..</p>
      <Link to="profile">Profile</Link>
      <Outlet/>
    </div>
  );
};

export default About;
