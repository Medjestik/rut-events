import { Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from '../store/store';

import { EROUTES } from '../shared/utils/routes';
import { getEvents } from '../store/events/actions';

import { Preloader } from '../shared/components/Preloader/ui/preloader';
import { Landing } from '../pages/Landing/ui/landing';
import { NotFound } from '../pages/NotFound/ui/not-found';

import styles from './app.module.scss';

export const App = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.events);

	useEffect(() => {
		dispatch(getEvents());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.page}>
			{loading ? (
				<Preloader />
			) : (
				<Routes>
					<Route path={EROUTES.HOME} element={<Landing />} />
					<Route path={EROUTES.NOT_FOUND} element={<NotFound />} />
				</Routes>
			)}
			<div id='modal-root'></div>
		</div>
	);
};
