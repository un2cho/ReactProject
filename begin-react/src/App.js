import React, { useReducer, useMemo, createContext } from 'react';
import produce from 'immer';
import UserList from './UserList';
import CreateUser from './CreateUser';


function countActiveUsers(users) {
  console.log ('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
     {
            id: 1,
            username: 'MJ',
            email: 'mj@naver.com',
            active: true
        },
        {
            id: 2,
            username: 'SY',
            email: 'sy@namer.com',
            active: false
        },
        {
            id: 3,
            username: 'HR',
            email: 'hr@naver.com',
            active: false
        },
        {
            id:4,
            username: 'HJ',
            email: 'hj@naver.com',
            active: false
        }
  ]
};

function reducer(state, action) {
  switch (action.type) {
      case 'CREATE_USER':
        return {
          users: state.users.concat(action.user)
        };

      case 'TOGGLE_USER':
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.id ? { ...user, active: !user.active } :user
          )
        };
      
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id)
        };
  
    default:
      return state;
  } 
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const { users } = state;

  const count =useMemo(() => countActiveUsers(users), [users]);

    return (
    <UserDispatch.Provider value={dispatch}>
    <CreateUser />
    <UserList users={users} />
    <div>활성 사용자 수: {count}</div>
   </UserDispatch.Provider>
  );
}


export default App;
