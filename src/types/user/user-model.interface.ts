import { UserRoleEnum } from './user-role.enum';

export interface IUserModel {
	id: number;
	email: string;
	createdAt: Date;
	updatedAt: Date;
	avatar: string | null;
	firstName: string | null;
	lastName: string | null;
	age: number | null;
	isActivated: boolean;
	role: UserRoleEnum;
}
