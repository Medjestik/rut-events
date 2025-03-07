export interface IButtonProps {
	type?: 'button' | 'submit';
	width?: 'full' | 'large' | 'medium' | 'small' | 'auto' | 'content';
	style?: 'default' | 'cancel' | 'landing' | 'light' | 'delete' | 'secondary';
	form?: string;
	isBlock?: boolean;
	text: string;
	onClick?: () => void;
}

export interface IButtonLinkProps {
	width?: 'full' | 'large' | 'medium' | 'small' | 'auto';
	style?: 'default' | 'cancel' | 'landing' | 'light' | 'delete';
	isBlock?: boolean;
	text: string;
	link: string;
}
