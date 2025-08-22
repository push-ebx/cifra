import clsx from 'clsx';

import styles from './pause-button.module.scss';

export const PauseButton = ({
	fill = 'currentColor',
	width = '8.5rem',
	height = '8.5rem',
	className = '',
	...props
}) => {
	return (
		<svg
			className={clsx(styles.root, className)}
			fill="none"
			height={height}
			viewBox="0 0 136 136"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clip-path="url(#clip0_2474_994)">
				<rect
					fill={fill}
					height="67.2222"
					rx="6.11111"
					width="12.2222"
					x="46"
					y="33.8887"
				/>
				<rect
					fill={fill}
					height="67.2222"
					rx="6.11111"
					width="12.2222"
					x="77.7778"
					y="33.8887"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2474_994">
					<rect fill={fill} height="135.425" width="135.425" />
				</clipPath>
			</defs>
		</svg>
	);
};

PauseButton.displayName = 'PauseButton';
