import type { FC } from 'react';

import { Link } from 'react-scroll';

import { Header } from '../Header/header';
import { Button } from '../../../../shared/components/Button/ui/button';
import { NumberCard } from '../../../../shared/components/NumberCard/ui/number-card';

import styles from './main.module.scss';

export const Main: FC = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Header />
				<div className={styles.description}>
					<div className={styles.title}>
						<span className={styles.title__text}>твой</span>
						<h1
							className={`${styles.title__text} ${styles.title_font_defectica}`}>
							ТЕСТ-ДРАЙВ
						</h1>
						<span className={styles.title__text}>в&nbsp;профессии</span>
					</div>
					<p className={styles.caption}>
						Узнай, как устроен университет, посети настоящие лекции и реши, куда
						двигаться дальше.
					</p>
				</div>
				<div className={styles.control}>
					<Link
						className={styles.link}
						to='events'
						smooth={true}
						offset={20}
						duration={1000}
						spy={true}>
						<Button
							text='Записаться на мероприятие'
							width='auto'
							style='landing'
						/>
					</Link>
					<div className={styles.numbers}>
						<NumberCard
							count={100}
							caption='Предстоящих мероприятий'
							background='transparent'
						/>
						<NumberCard
							count={10}
							caption='Дней открытых дверей'
							background='transparent'
						/>
					</div>
				</div>
			</div>
			<div className={styles.bubble_first}></div>
			<div className={styles.bubble_second}></div>
			<div className={styles.bubble_third}></div>
			<svg
				className={styles.gradient}
				width='100%'
				height='100vh'
				viewBox='0 0 1920 1080'
				preserveAspectRatio='none'>
				<defs>
					<linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
						<stop offset='0%' stopColor='#0500F7' stopOpacity='0.5' />
						<stop offset='80%' stopColor='#FF4141' stopOpacity='0.5' />
						<stop
							offset='100%'
							stopColor='rgba(255, 65, 65, 0)'
							stopOpacity='0'
						/>
					</linearGradient>
					<filter id='blur'>
						<feGaussianBlur stdDeviation='60' />
					</filter>
				</defs>
				<path
					d='M0,100 Q480,500 960,700 T1920,900'
					stroke='url(#gradient)'
					strokeWidth='60'
					fill='none'
					filter='url(#blur)'
				/>
			</svg>
			<Link to='about' smooth={true} offset={60} duration={500} spy={true}>
				<div className={styles.circle}>
					<div className={styles.circle__icon}></div>
				</div>
			</Link>
		</div>
	);
};
