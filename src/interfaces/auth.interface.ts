import { JwtPayload } from 'jsonwebtoken';

interface AuthAttributes {
	email: string;
	password: string;
	remember?: boolean;
}

interface UserPayload extends Pick<AuthAttributes, 'email'>, JwtPayload {
	id: string;
	username: string;
	full_name: string;
	avatar: string;
	expires?: string | number;
}

interface AuthUserInterface extends UserPayload {
	iat: number;
	exp: number;
}


export {
	AuthAttributes,
	UserPayload,
	AuthUserInterface,
};
