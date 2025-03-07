// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/label-has-associated-control */
import type { FC } from 'react';
import type { IEvent } from '../../../../store/events/types';

import { useDispatch, useSelector } from '../../../../store/store';
import { setSelectedEvents } from '../../../../store/events/reducer';

import { convertDate } from '../../../../shared/lib/convertDate';
import { convertTime } from '../../../../shared/lib/convertTime';

import styles from './events-table.module.scss';

export const EventsTable: FC = () => {
	const dispatch = useDispatch();
	const { filteredEvents } = useSelector((state) => state.events);

	const handleChangeStatus = (item: IEvent) => {
		dispatch(setSelectedEvents(item));
	};

	return (
		<div className={styles.table}>
			<div className={styles.table__container}>
				<div className={styles.table__header}>
					<div
						className={`${styles.table__column} ${styles.table__column_type_count}`}>
						<p
							className={`${styles.table__text} ${styles.table__text_weight_bold}`}></p>
					</div>
					<div
						className={`${styles.table__column} ${styles.table__column_type_name}`}>
						<p
							className={`${styles.table__text} ${styles.table__text_weight_bold}`}>
							Наименование
						</p>
					</div>
					<div
						className={`${styles.table__column} ${styles.table__column_type_type}`}>
						<p
							className={`${styles.table__text} ${styles.table__text_weight_bold}`}>
							Вид
						</p>
					</div>
					<div
						className={`${styles.table__column} ${styles.table__column_type_date}`}>
						<p
							className={`${styles.table__text} ${styles.table__text_weight_bold}`}>
							Дата
						</p>
					</div>
					<div
						className={`${styles.table__column} ${styles.table__column_type_time}`}>
						<p
							className={`${styles.table__text} ${styles.table__text_weight_bold}`}>
							Время
						</p>
					</div>
					<div
						className={`${styles.table__column} ${styles.table__column_type_direction}`}>
						<p
							className={`${styles.table__text} ${styles.table__text_weight_bold}`}>
							Направление
						</p>
					</div>
				</div>
				{filteredEvents.length < 1 ? (
					<p className={styles.table__empty}>
						По заданным параметрам ничего не найдено.
					</p>
				) : (
					<ul className={styles.table__main}>
						{filteredEvents.map((item) => (
							<li className={styles.table__row} key={item.id}>
								<div
									className={`${styles.table__column} ${styles.table__column_type_count}`}>
									<label className='checkbox'>
										<input
											name={`webinar-discipline-complete-${item.id}`}
											type='checkbox'
											id={`webinar-discipline-complete-${item.id}`}
											defaultChecked={false}
											onChange={() => handleChangeStatus(item)}></input>
										<span></span>
									</label>
								</div>
								<div
									className={`${styles.table__column} ${styles.table__column_type_name}`}>
									<p className={`${styles.table__text}`}>{item.discipline}</p>
								</div>
								<div
									className={`${styles.table__column} ${styles.table__column_type_type}`}>
									{item.type === 'Лекция' ? (
										<p
											className={`${styles.table__tag} ${styles.table__tag_color_blue}`}>
											Лекция
										</p>
									) : (
										<p
											className={`${styles.table__tag} ${styles.table__tag_color_green}`}>
											Практика
										</p>
									)}
								</div>
								<div
									className={`${styles.table__column} ${styles.table__column_type_date}`}>
									<p className={`${styles.table__text}`}>
										{item.weekday}, {convertDate(item.date)}
									</p>
								</div>
								<div
									className={`${styles.table__column} ${styles.table__column_type_time}`}>
									<p className={`${styles.table__text}`}>
										{convertTime(item.start_time, item.end_time)}
									</p>
								</div>
								<div
									className={`${styles.table__column} ${styles.table__column_type_direction}`}>
									<p className={`${styles.table__text}`}>{item.direction}</p>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
