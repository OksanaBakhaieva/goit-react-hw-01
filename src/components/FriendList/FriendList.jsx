import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.cardList}>
        {friends.map((friend) => {
          const onlineStatus = friend.isOnline;
          return (
            <li className={css.card} key={friend.id}>
              <FriendListItem
                className={clsx({
                  [css.online]: onlineStatus,
                  [css.offline]: !onlineStatus,
                })}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={onlineStatus}
                friend={friend}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;