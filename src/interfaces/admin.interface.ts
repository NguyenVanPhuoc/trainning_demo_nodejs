interface AdminAttributes {
	id: number;
	username: string;
	email: string;
	password?: string;
	full_name?: string;
	address?: string;
	phone?: string;
	birth_date?: string | null;
	avatar?: string;
	role?: number;
	status?: number;
	created_at: Date;
	updated_at: Date;
}

interface ProfileAttributes {
	id: number;
	email: string;
	username: string;
	full_name?: string;
	address?: string;
	phone?: string;
	birth_date?: string | null;
	avatar?: string;
}

interface AdminCreationAttributes
	extends Omit<AdminAttributes, 'id' | 'created_at' | 'updated_at'> {}

export { AdminAttributes, AdminCreationAttributes, ProfileAttributes };
