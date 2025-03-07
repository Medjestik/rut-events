import type { FC } from 'react';
import type { INumberCard } from '../types/types';

import styles from '../styles/number-card.module.scss';

export const NumberCard: FC<INumberCard> = ({
	count,
	caption,
	withPlus = true,
	background = 'default',
}) => {
	return (
		<div
			className={`${styles.card} ${styles[`card_background_${background}`]}`}>
			<span className={styles.card__count}>
				{count}
				{withPlus ? '+' : ''}
			</span>
			<h4 className={styles.card__caption}>{caption}</h4>
		</div>
	);
};
