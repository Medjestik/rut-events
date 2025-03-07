import { required } from '../../../../shared/lib/validationRules';

export const validationSchema = {
	name: [required('Введите имя')],
	school: [required('Введите школу')],
	classNumber: [required('Введите класс')],
	phone: [required('Введите телефон')],
};
