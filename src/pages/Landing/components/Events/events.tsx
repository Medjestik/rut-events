import type { FC } from 'react';
import type { IEvent } from '../../../../store/events/types';

import { useDispatch, useSelector } from '../../../../store/store';
import {
	setSearchedEvents,
	setCurrentDirection,
	setCurrentDate,
	setIsOpenRequestModal,
	setIsOpenSuccessModal,
	setIsOpenEventsListModal,
} from '../../../../store/events/reducer';

import { Search } from '../../../../shared/components/Search/ui/search';
import { Select } from '../../../../shared/components/Select/ui/select';
import { Button } from '../../../../shared/components/Button/ui/button';
import { Modal } from '../../../../shared/components/Modal/ui/modal';
import { EventsTable } from './events-table';
import { EventsList } from './events-list';
import { EventRequestForm } from './events-request-form';

import styles from './events.module.scss';

export const Events: FC = () => {
	const dispatch = useDispatch();
	const {
		events,
		selectedEvents,
		possibleDirections,
		possibleDates,
		currentDirection,
		currentDate,
		isOpenRequestModal,
		isOpenSuccessModal,
		isOpenEventsListModal,
	} = useSelector((state) => state.events);

	const handleSearchEvents = (items: IEvent[]) => {
		dispatch(setSearchedEvents(items));
	};

	const handleSetDirection = (item: string) => {
		dispatch(setCurrentDirection(item));
	};

	const handleSetDate = (item: string) => {
		dispatch(setCurrentDate(item));
	};

	const handleOpenRequestModal = () => {
		dispatch(setIsOpenRequestModal(true));
	};

	const handleOpenEventsListModal = () => {
		dispatch(setIsOpenEventsListModal(true));
	};

	const handleCloseModal = () => {
		dispatch(setIsOpenRequestModal(false));
		dispatch(setIsOpenSuccessModal(false));
		dispatch(setIsOpenEventsListModal(false));
	};

	return (
		<div id='events' className={styles.section}>
			<span className={styles.section__count}>02</span>
			<div className={styles.container}>
				<div className={styles.info}>
					<span className={styles.tag}>Список мероприятий</span>
					<h2 className={styles.title}>Что тебе посетить?</h2>
				</div>
				<div className={styles.control}>
					<Search items={events} onSearch={handleSearchEvents} />
					<Select
						placeholder='Направление'
						options={possibleDirections}
						currentOption={currentDirection}
						onChooseOption={handleSetDirection}
					/>
					<Select
						placeholder='Дата'
						options={possibleDates}
						currentOption={currentDate}
						onChooseOption={handleSetDate}
						width='small'
					/>
					{selectedEvents.length > 0 ? (
						<div
							className={`${styles.events__count} ${styles.events__count_type_active}`}
							onClick={handleOpenEventsListModal}>
							Выбрано мероприятий: {selectedEvents.length}
						</div>
					) : (
						<div
							className={`${styles.events__count} ${styles.events__count_type_empty}`}>
							Выбрано мероприятий: {selectedEvents.length}
						</div>
					)}

					<Button
						text='Записаться'
						isBlock={selectedEvents.length < 1}
						onClick={handleOpenRequestModal}
					/>
				</div>
				<EventsTable />
			</div>
			{isOpenRequestModal && (
				<Modal
					isOpen={isOpenRequestModal}
					onClose={handleCloseModal}
					title='Запись на мероприятия'
					description='Оставьте свои данные, и с вами свяжется наш специалист для оформления пропуска на территорию университета.'>
					<EventRequestForm />
				</Modal>
			)}
			{isOpenSuccessModal && (
				<Modal
					isOpen={isOpenSuccessModal}
					onClose={handleCloseModal}
					title='Ваша запись подтверждена!'
					description='В ближайшее время с вами свяжется наш специалист для оформления пропуска на территорию университета.'></Modal>
			)}
			{isOpenEventsListModal && (
				<Modal
					isOpen={isOpenEventsListModal}
					onClose={handleCloseModal}
					title='Выбранные мероприятия'>
					<EventsList />
				</Modal>
			)}
		</div>
	);
};
