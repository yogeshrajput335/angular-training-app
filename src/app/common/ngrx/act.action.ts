import { Action } from '@ngrx/store';
import { UserModel  } from './user.model';
export const AddUserConst = '[Add User] Component';
export const DeleteUserConst = '[Delete User] Component';
export class AddUser implements Action{
    readonly type= AddUserConst;
    constructor(public data: UserModel){}
}

// export class DeleteUser implements Action{
//   readonly type = DeleteUserConst;
//     constructor(public id: number){}
// }

export type Actions = AddUser ;//| DeleteUser;
