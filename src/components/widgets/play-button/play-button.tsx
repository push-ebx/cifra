import clsx from 'clsx';

import styles from './play-button.module.scss';

export const PlayButton = ({
	fill = 'currentColor',
	width = '8.4375rem',
	height = '8.4375rem',
	className = '',
	...props
}) => {
	return (
		<svg
			className={clsx(styles.root, className)}
			fill="none"
			height={height}
			viewBox="0 0 135 135"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#clip0_699_8784)">
				<path
					d="M42.1875 67.499V44.3091C42.1875 39.4603 47.4365 36.4297 51.6358 38.8542L71.7187 50.4491L91.8018 62.0441C96.001 64.4685 96.001 70.5296 91.8018 72.954L71.7187 84.549L51.6358 96.1439C47.4366 98.5684 42.1875 95.5378 42.1875 90.689V67.499Z"
					fill={fill}
				/>
			</g>
			<defs>
				<clipPath id="clip0_699_8784">
					<rect fill={fill} height="135.425" width="135.425" />
				</clipPath>
			</defs>
		</svg>
	);
};

PlayButton.displayName = 'AddIcon';
