export interface ISelectProps {
	options: string[];
	placeholder: string;
	currentOption: string | null;
	onChooseOption: (option: string) => void;
	width?: 'default' | 'small';
}
