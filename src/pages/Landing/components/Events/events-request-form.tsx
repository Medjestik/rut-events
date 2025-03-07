import type { FC, FormEvent } from 'react';
import type { IEventRequestValues } from './types';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../../../store/store';
import { useForm } from '../../../../hooks/useForm';

import { createEventRequest } from '../../../../store/events/actions';

import { Form } from '../../../../shared/components/Form/ui/form';
import {
	FormField,
	FormInput,
	FormButtons,
} from '../../../../shared/components/Form/components';
import { Button } from '../../../../shared/components/Button/ui/button';

import { validationSchema } from './helpers';

export const EventRequestForm: FC = () => {
	const dispatch = useDispatch();
	const { selectedEvents, isLoadingRequest } = useSelector(
		(state) => state.events
	);

	const [isBlockSubmit, setIsBlockSubmit] = useState<boolean>(true);
	const { values, handleChange, errors } = useForm<IEventRequestValues>(
		{ name: '', school: '', classNumber: '', phone: '' },
		validationSchema
	);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!isBlockSubmit) {
			dispatch(
				createEventRequest({
					name: values.name,
					school: values.school,
					classNumber: values.classNumber,
					phone: values.phone,
					events: selectedEvents.map((event) => event.id),
				})
			);
		}
	};

	const shouldBlockSubmit = (values: IEventRequestValues): boolean => {
		return (
			!values.name.trim() ||
			!values.school.trim() ||
			!values.classNumber.trim() ||
			!values.phone.trim()
		);
	};

	useEffect(() => {
		setIsBlockSubmit(shouldBlockSubmit(values));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);

	useEffect(() => {
		setIsBlockSubmit(true);
	}, []);

	return (
		<Form name='form-events-request' onSubmit={handleSubmit}>
			<FormField
				title='Имя'
				fieldError={{
					text: errors.name || '',
					isShow: !!errors.name,
				}}>
				<FormInput
					name='name'
					placeholder='Введите имя'
					value={values.name}
					onChange={handleChange}
				/>
			</FormField>
			<FormField
				title='Школа'
				fieldError={{
					text: errors.school || '',
					isShow: !!errors.school,
				}}>
				<FormInput
					name='school'
					placeholder='Введите название школы'
					value={values.school}
					onChange={handleChange}
				/>
			</FormField>
			<FormField
				title='Класс'
				fieldError={{
					text: errors.classNumber || '',
					isShow: !!errors.classNumber,
				}}>
				<FormInput
					name='classNumber'
					placeholder='Введите номер класса'
					value={values.classNumber}
					onChange={handleChange}
				/>
			</FormField>
			<FormField
				title='Телефон'
				fieldError={{
					text: errors.phone || '',
					isShow: !!errors.phone,
				}}>
				<FormInput
					name='phone'
					placeholder='Введите телефон'
					value={values.phone}
					onChange={handleChange}
				/>
			</FormField>
			<FormButtons>
				{isLoadingRequest ? (
					<Button type='button' text='Создание..' width='full' isBlock={true} />
				) : (
					<Button
						type='submit'
						text='Создать'
						width='full'
						isBlock={isBlockSubmit}
					/>
				)}
			</FormButtons>
		</Form>
	);
};
