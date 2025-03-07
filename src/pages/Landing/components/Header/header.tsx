import type { FC } from 'react';

import logoIcon from '../../../../shared/images/icons/logo/logo-icon.png';
import logoCaption from '../../../../shared/images/icons/logo/logo-caption.png';

import styles from './header.module.scss';

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.logo_img} src={logoIcon} alt='Лого' />
				<img className={styles.logo_img} src={logoCaption} alt='РУТ' />
			</div>
		</div>
	);
};
