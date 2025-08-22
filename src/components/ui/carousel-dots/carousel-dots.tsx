import React from 'react';

type CarouselDotsProps = {
	activeSlide: number;
	totalSlides: number;
	onDotClick: (index: number) => void;
};

export const CarouselDots = ({
	activeSlide,
	totalSlides,
	onDotClick,
}: CarouselDotsProps) => {
	const containerStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
	};

	const dotBaseStyle: React.CSSProperties = {
		width: '0.5rem',
		height: '0.5rem',
		margin: '0.1rem',
		borderRadius: '50%',
		cursor: 'pointer',
		border: 'none',
		padding: 0,
		transition:
			'transform 500ms ease-in-out, background-color 500ms ease-in-out',
	};

	const renderDots = () =>
		Array.from({ length: totalSlides }, (_, index) => {
			const isActive = index === activeSlide;
			const style: React.CSSProperties = {
				...dotBaseStyle,
				backgroundColor: isActive ? '#fff' : '#BD9BF4',
			};

			return (
				<button
					key={index}
					aria-current={isActive ? 'true' : undefined}
					aria-label={`Перейти к слайду ${index + 1}`}
					onClick={() => onDotClick(index)}
					style={style}
					title={`Слайд ${index + 1}`}
					type="button"
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') onDotClick(index);
					}}
				/>
			);
		});

	return <div style={containerStyle}>{renderDots()}</div>;
};

CarouselDots.displayName = 'CarouselDots';
