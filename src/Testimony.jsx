export default function Testimony({
  placement,
  profilePic,
  name,
  role,
  title,
  text,
  color
}) {
  return (
    <div className={`testimony-container ${color} ${placement}`}>
      <div className="profile-container">
        <img className="profile-picture" src={profilePic} alt="profile icon" />
        <div className={`profile-name-container`}>
          <h2 className="profile-name">{name}</h2>
          <p className="profile-role small-text">{role}</p>
        </div>
      </div>
      <h2 className={`testimony-title`}>{title}</h2>
      <p className={`testimony-text small-text ${color}`}>"{text}"</p>
    </div>
  );
}
