import { FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../../data/profile";

function ProfileWidget() {
  return (
    <section className="profile-widget">

      <img
        src={profile.photo}
        alt={profile.name}
        className="profile-image"
      />

      <div>

        <h1>{profile.name}</h1>

        <h3>{profile.title}</h3>

        <p>{profile.tagline}</p>

        <div className="location">

          <FiMapPin />

          <span>{profile.location}</span>

        </div>

        <div className="social-links">

          <a href={profile.github}>
            <FiGithub />
          </a>

          <a href={profile.linkedin}>
            <FiLinkedin />
          </a>

        </div>

      </div>

    </section>
  );
}

export default ProfileWidget;