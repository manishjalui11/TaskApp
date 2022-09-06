import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h4>Version 1.0.0</h4>
      <p>This is developed by</p>
      <p>~ Manish Jalui</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
