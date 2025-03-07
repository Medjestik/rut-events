import type { FC } from 'react';

import img1 from '../../../../shared/images/gallery/image-1.svg';
import img2 from '../../../../shared/images/gallery/image-2.svg';
import img3 from '../../../../shared/images/gallery/image-3.svg';

import styles from './gallery.module.scss';

export const Gallery: FC = () => {
	return (
		<div className={styles.section}>
			<span className={styles.section__count}>03</span>
			<div className={styles.container}>
				<span className={styles.tag}>Формат мероприятий</span>
				<div className={styles.info}>
					<h2 className={styles.title}>Как проходят мероприятия?</h2>
					<p className={styles.text}>
						Вы присоединитесь к&nbsp;занятиям в&nbsp;реальных аудиториях вместе
						с&nbsp;текущими студентами, чтобы получить представление о&nbsp;том,
						как&nbsp;проходит учебный процесс в&nbsp;Институте экономики и
						финансов.
					</p>
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<img className={styles.item__img} alt='3302' src={img1}></img>
						<div className={styles.item__overlay}>
							<span className={styles.item__text}>Лекция, аудитория 3302</span>
						</div>
					</li>
					<li className={styles.item}>
						<img className={styles.item__img} alt='3210' src={img2}></img>
						<div className={styles.item__overlay}>
							<span className={styles.item__text}>
								Практика, аудитория 3210
							</span>
						</div>
					</li>
					<li className={styles.item}>
						<img className={styles.item__img} alt='3216' src={img3}></img>
						<div className={styles.item__overlay}>
							<span className={styles.item__text}>
								Практика, аудитория 3216
							</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
