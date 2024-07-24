import { plainToInstance, ClassConstructor } from 'class-transformer';
import { AdminDto } from './admin.dto';

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

export { plainObject, AdminDto };
