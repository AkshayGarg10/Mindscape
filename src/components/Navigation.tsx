import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAssessment } from "react-icons/md";
import { SiPivotaltracker } from "react-icons/si";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { GiBrain } from "react-icons/gi";
import { useLocation } from "react-router-dom";

const defaultStyle: React.CSSProperties = {
  color: "white",
  fontSize: "24px",
  zIndex: 1,
  position: "relative",
};

const glassStyle: React.CSSProperties = {
  position: "absolute",
  height: "50px",
  width: "50px",
  backgroundColor: "rgba(255, 255, 255, 0.2)", 
  backdropFilter: "blur(10px)", 
  borderRadius: "50%",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", // Smooth transition
  opacity: 0,
};

const iconPositions: Record<string, string> = {
  "/": "translateX(-305%)", // Home
  "/assessment": "translateX(-155%)", // Assessment
  "/community": "translateX(0%)", // Community
  "/tracker": "translateX(155%)", // Tracker
  "/mindfullness": "translateX(305%)", 
};

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bottom-3 inset-x-0 h-2 fixed flex justify-center md:top-3 md:fixed">
      <nav className="relative flex justify-around items-center h-14 bg-green-600 rounded-3xl w-96">
        {/* Glass effect div */}
        <div
          style={{
            ...glassStyle,
            transform: iconPositions[currentPath] || "translateX(0%)",
            opacity: 1, // Fade-in effect
          }}
        />
        <a href="/" style={defaultStyle}>
          <IoHomeOutline />
        </a>
        <a href="/assessment" style={defaultStyle}>
          <MdOutlineAssessment />
        </a>
        <a href="/community" style={defaultStyle}>
          <LiaUserFriendsSolid />
        </a>
        <a href="/tracker" style={defaultStyle}>
          <SiPivotaltracker />
        </a>
        <a href="/mindfullness" style={defaultStyle}>
          <GiBrain />
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
