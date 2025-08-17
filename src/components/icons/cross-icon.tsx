export const CrossIcon = ({
	fill = '#752CE8',
	width = '0.875rem',
	height = '0.875rem',
	...props
}) => {
	return (
		<svg
			fill="none"
			height={height}
			viewBox="0 0 24 24"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 0.925781V23.2115"
				stroke={fill}
				stroke-linecap="square"
				stroke-linejoin="round"
				stroke-width="1.5"
			/>
			<path
				d="M0.857422 12H23.1431"
				stroke={fill}
				stroke-linecap="square"
				stroke-linejoin="round"
				stroke-width="1.5"
			/>
		</svg>
	);
};

CrossIcon.displayName = 'AddIcon';
