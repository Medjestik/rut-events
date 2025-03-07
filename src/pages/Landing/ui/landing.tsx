import type { FC } from 'react';

import { Main } from '../components/Main/main';
import { About } from '../components/About/about';
import { Events } from '../components/Events/events';
import { Gallery } from '../components/Gallery/gallery';
import { Footer } from '../components/Footer/footer';

import styles from '../styles/landing.module.scss';

export const Landing: FC = () => {
	return (
		<div className={styles.landing}>
			<Main />
			<About />
			<Events />
			<Gallery />
			<Footer />
		</div>
	);
};
