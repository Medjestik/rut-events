import type { FC } from 'react';

import { Link } from 'react-scroll';

import { NumberCard } from '../../../../shared/components/NumberCard/ui/number-card';

import styles from './about.module.scss';

export const About: FC = () => {
	return (
		<div id='about' className={styles.section}>
			<span className={styles.section__count}>01</span>
			<div className={styles.container}>
				<div className={styles.info}>
					<span className={styles.tag}>О мероприятиях</span>
					<h2 className={styles.title}>Что тебя ждет?</h2>
					<p className={styles.text}>
						Институт экономики и&nbsp;финансов РУТ (МИИТ) приглашает всех
						школьников на&nbsp;открытые лекции, практические занятия и&nbsp;дни
						открытых дверей. Это уникальная возможность заглянуть за&nbsp;кулисы
						студенческой жизни, познакомиться с&nbsp;нашими преподавателями
						и&nbsp;понять, какое будущее тебе по&nbsp;душе.
					</p>
					<Link
						className={styles.link}
						to='events'
						smooth={true}
						offset={20}
						duration={500}
						spy={true}>
						<span>Список мероприятий &#10140;</span>
					</Link>
				</div>
				<div className={styles.numbers}>
					<div className={styles.numbers_first}>
						<NumberCard count={10} caption='Направлений обучения' />
					</div>
					<div className={styles.numbers_second}>
						<NumberCard
							count={200}
							caption='Вовлекающего контента'
							background='color'
						/>
					</div>
					<div className={styles.numbers_third}>
						<NumberCard count={50} caption='Спикеров и экспертов' />
					</div>
				</div>
				<div className={styles.bubble_first}></div>
				<div className={styles.bubble_second}></div>
				<div className={styles.bubble_third}></div>
			</div>
		</div>
	);
};
