import { plainToInstance, ClassConstructor } from 'class-transformer';
import { AdminDto } from './admin.dto';
import { DepartmentnDto } from './department.do';

const plainObject = <T, V>(
	dto: ClassConstructor<T>,
	entity: V | V[],
	excludeExtraneousValues = true,
) => {
	return plainToInstance(dto, entity, {
		excludeExtraneousValues,
		exposeUnsetFields: false,
	});
};

export { plainObject, AdminDto, DepartmentnDto };
