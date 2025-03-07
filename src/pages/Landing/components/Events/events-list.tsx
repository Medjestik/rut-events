import type { FC } from 'react';
import type { IEvent } from '../../../../store/events/types';

import { useSelector } from '../../../../store/store';

import { convertDate } from '../../../../shared/lib/convertDate';
import { convertTime } from '../../../../shared/lib/convertTime';

import styles from './event-list.module.scss';

export const EventsList: FC = () => {
	const { selectedEvents } = useSelector((state) => state.events);

	return (
		<ul className={styles.list}>
			{selectedEvents.map((event: IEvent, i: number) => (
				<li key={event.id} className={styles.item}>
					<span className={styles.number}>{i + 1}.</span>
					<div className={styles.container}>
						<h4 className={styles.title}>{event.discipline}</h4>
						<div className={styles.info}>
							<span className={styles.info__item}>
								Дата: {event.weekday}, {convertDate(event.date)}
							</span>
							<span className={styles.info__item}>
								Время: {convertTime(event.start_time, event.end_time)}
							</span>
							<span className={styles.info__item}>Ауд. {event.classroom}</span>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};
