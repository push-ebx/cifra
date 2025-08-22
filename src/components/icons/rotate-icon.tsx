export const RotateIcon = ({
	fill = 'currentColor',
	width = '3.6875rem',
	height = '4.13294rem',
	...props
}) => {
	return (
		<svg
			fill="none"
			height={height}
			viewBox="0 0 135 135"
			width={width}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M64.9221 56.8025L57.129 64.5957C55.6943 66.0303 55.6943 68.3564 57.129 69.7911L64.9221 77.5842C66.3567 79.0188 68.6828 79.0188 70.1175 77.5842L77.9106 69.7911C79.3453 68.3564 79.3453 66.0303 77.9106 64.5957L70.1175 56.8025C68.6828 55.3679 66.3567 55.3679 64.9221 56.8025Z"
				stroke={fill}
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			/>
			<path
				d="M96.9999 52.3685C91.5897 41.4817 80.3553 34 67.3735 34C54.3915 34 43.4103 41.4817 38 52.3685"
				stroke={fill}
				stroke-linecap="round"
				stroke-width="2"
			/>
			<path
				d="M38 37.6738V52.3687"
				stroke={fill}
				stroke-linecap="round"
				stroke-width="2"
			/>
			<path
				d="M50.4542 52.3687H38"
				stroke={fill}
				stroke-linecap="round"
				stroke-width="2"
			/>
			<path
				d="M38 81.7583C43.4103 92.6451 54.6446 100.127 67.6266 100.127C80.6084 100.127 91.5897 92.6451 96.9999 81.7583"
				stroke={fill}
				stroke-linecap="round"
				stroke-width="2"
			/>
			<path
				d="M97 96.4531V81.7583"
				stroke={fill}
				stroke-linecap="round"
				stroke-width="2"
			/>
			<path
				d="M84.5449 81.7583H96.9992"
				stroke={fill}
				stroke-linecap="round"
				stroke-width="2"
			/>
		</svg>
	);
};

RotateIcon.displayName = 'RotateIcon';
