import type { FC } from 'react';

import { Link } from 'react-scroll';

import { currentYear } from '../../../../shared/lib/getCurrentYear';

import { Button } from '../../../../shared/components/Button/ui/button';

import logoIcon from '../../../../shared/images/icons/logo/logo-icon.png';
import logoCaption from '../../../../shared/images/icons/logo/logo-caption.png';

import styles from './footer.module.scss';

export const Footer: FC = () => {
	return (
		<footer className={styles.section}>
			<div className={styles.container}>
				<div className={styles.background}></div>
				<div className={styles.info}>
					<div className={styles.title}>
						<h1 className={styles.title__text}>
							твой
							<span className={styles.title_font_defectica}> ТЕСТ-ДРАЙВ</span>
						</h1>
						<span className={styles.title__text}>в&nbsp;профессии</span>
					</div>
					<Link
						className={styles.link}
						to='events'
						smooth={true}
						offset={20}
						duration={1000}
						spy={true}>
						<Button
							text='Записаться на мероприятие'
							width='content'
							style='landing'
						/>
					</Link>
					<div className={styles.logo}>
						<img className={styles.logo_img} src={logoIcon} alt='Лого' />
						<img className={styles.logo_img} src={logoCaption} alt='РУТ' />
					</div>
					<p className={styles.copy}>
						&copy; {currentYear} Российский университет транспорта
					</p>
				</div>
			</div>
		</footer>
	);
};
