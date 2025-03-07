import type { ISelectProps } from '../types/types';

import { useState, useRef } from 'react';
import { useOnClickOutside } from '../../../../hooks/useOnClickOutside';

import styles from '../styles/select.module.scss';

export const Select = ({
	placeholder,
	options,
	currentOption,
	onChooseOption,
	width = 'default',
}: ISelectProps) => {
	const [isOpenSelectOptions, setIsOpenSelectOptions] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	const openSelectOptions = () => {
		setIsOpenSelectOptions((prev) => !prev);
	};

	const chooseOption = (option: string) => {
		onChooseOption(option);
		setTimeout(() => setIsOpenSelectOptions(false), 0);
	};

	const handleClickOutside = () => {
		setIsOpenSelectOptions(false);
	};

	useOnClickOutside(selectRef, handleClickOutside);

	return (
		<div
			ref={selectRef}
			className={`${styles.select} ${
				width === 'default'
					? styles.select_width_default
					: styles.select_width_small
			} ${isOpenSelectOptions ? styles.select_open : ''}`}
			onClick={openSelectOptions}>
			<div className={styles.main}>
				{currentOption ? (
					<p className={styles.title}>{currentOption || ''}</p>
				) : (
					<p className={styles.placeholder}>{placeholder || ''}</p>
				)}
				<div
					className={`${styles.arrow} ${
						isOpenSelectOptions ? styles.arrow_status_open : ''
					}`}
				/>
			</div>
			<div
				className={`${styles.options} ${
					isOpenSelectOptions ? styles.options_status_open : ''
				}`}>
				<ul className={styles.list}>
					{options.length > 0 ? (
						options
							.filter((item) => item !== currentOption)
							.map((item, index) => (
								<li
									className={styles.item}
									key={index}
									onClick={() => chooseOption(item)}>
									<p className={styles.text}>{item}</p>
								</li>
							))
					) : (
						<li className={styles.item}>
							<p className={`${styles.text} ${styles.text_empty}`}>
								Результаты не найдены.
							</p>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};
