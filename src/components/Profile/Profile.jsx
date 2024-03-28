import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.wrapper}>
      <div>
        <img
          className={css.profileImg}
          src={image}
          width={212}
          alt="User avatar"
        />
        <h2>{name}</h2>
        <p className={css.mainText}>@{tag}</p>
        <p className={css.mainText}>{location}</p>
      </div>

      <ul className={css.listInfo}>
        <li className={css.listInfoItem}>
          <span className={css.itemTitle}>Followers</span>
          <span className={css.itemStats}>{stats.followers}</span>
        </li>
        <li className={css.listInfoItem}>
          <span className={css.itemTitle}>Views</span>
          <span className={css.itemStats}>{stats.views}</span>
        </li>
        <li className={css.listInfoItem}>
          <span className={css.itemTitle}>Likes</span>
          <span className={css.itemStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;