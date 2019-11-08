import React, { useContext } from "react";
import { UserDispatch } from "./App";
// import React, { useEffect } from 'react';

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  // useEffect(() => {
  //     console.log('컴포넌트가 화면에 나타남');
  //     return () => {
  //         console.log('컴포넌트가 화면에서 사라짐');
  //     }
  // }, []);

  // useEffect(() => {
  //     console.log('user 값이 설정됨');
  //     console.log(user);
  //     return () => {
  //         console.log('user 값이 변경됨');
  //         console.log(user);
  //     }
  // },[user]);

  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          color: active ? "tomato" : "black",
          cursor: "pointer"
        }}
        onClick={() =>
          dispatch({
            type: "TOGGLE_USER",
            id
          })
        }
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_USER",
            id
          })
        }
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);
