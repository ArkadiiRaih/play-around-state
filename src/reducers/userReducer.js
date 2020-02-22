import { users as defaultUsers } from "../normalizedState";
import { USER_CREATE } from "../actions/usersActions";
import { addEntity } from "./_utilities";

const userReducer = (users = defaultUsers, action) => {
  switch (action.type) {
    case USER_CREATE: {
      const { user, userId } = action.payload;
      return addEntity(users, user, userId);
    }
    default:
      return users;
  }
};

export default userReducer;
