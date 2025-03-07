import { useState } from 'react';

import styles from '../styles/search.module.scss';

interface SearchProps<T extends { discipline: string }> {
	items: T[];
	onSearch: (filteredItems: T[]) => void;
}

export const Search = <T extends { discipline: string }>({
	items,
	onSearch,
}: SearchProps<T>) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);

		const filteredItems = items.filter((item) =>
			item.discipline.toLowerCase().includes(value.toLowerCase())
		);

		onSearch(filteredItems);
	};

	return (
		<input
			className={styles.search}
			placeholder='Поиск...'
			type='text'
			id='search-filter'
			name='search-filter'
			autoComplete='disabled'
			value={query}
			onChange={handleSearch}
		/>
	);
};
