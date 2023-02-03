import { Action } from '@ngrx/store';
import * as UserActions from './act.action';
import { AddUser } from './act.action';
import { UserModel } from './user.model';
const InitialState: UserModel = {
  name: 'Haider',
  mobile: '989483943'
}

export function Reducers(state: UserModel[] = [InitialState], action: UserActions.Actions) {
  // console.log(state)
  switch (AddUser) {
    // case UserActions.AddUserConst:
    //   return [...state, action.data];

    // case UserActions.DeleteUserConst:
    //   return 'xxx'
    default:
      return state;
  }
}
