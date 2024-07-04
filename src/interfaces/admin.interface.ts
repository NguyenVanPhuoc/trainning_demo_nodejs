interface AdminAttributes {
	id: string;
	username: string;
	email: string;
	password?: string;
	full_name?: string;
	address?: string;
	phone?: string;
	birth_date?: string | null;
	avatar?: string;
	status?: number;
	created_at: Date;
	updated_at: Date;
  }
  
interface AdminCreationAttributes extends Omit<AdminAttributes, 'id' | 'created_at' | 'updated_at'> {}
  
export { AdminAttributes, AdminCreationAttributes };