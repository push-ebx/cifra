export const ArrowIcon = ({
	fill = 'currentColor',
	width = '3.125rem',
	height = '3.125rem',
	...props
}) => {
	return (
		<svg
			fill="none"
			height={height}
			viewBox="0 0 50 50"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx="25" cy="25" r="24.5" stroke={fill} />
			<path
				d="M32 25H14"
				stroke={fill}
				strokeLinejoin="round"
				strokeWidth="2"
			/>
			<path d="M26 19L32 25L26 31" stroke={fill} strokeWidth="2" />
		</svg>
	);
};

ArrowIcon.displayName = 'AddIcon';
