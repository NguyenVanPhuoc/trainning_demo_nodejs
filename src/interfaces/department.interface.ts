interface DepartmentAttributes {
	id: number;
	title: string;
	email: string;
	phone?: string;
	user_id?: number;
	created_at: Date;
	updated_at: Date;
}

interface DepartmentCreationAttributes
	extends Omit<DepartmentAttributes, 'id' | 'created_at' | 'updated_at'> {}

export { DepartmentAttributes, DepartmentCreationAttributes };
