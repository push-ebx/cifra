import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import { ArrowIcon } from '@/components/icons';
import { IconButton } from '@/components/ui/icon-button/icon-button';

import styles from './carousel-controls.module.scss';

type CarouselControlsProps = ComponentProps<'div'> & {
	onPrev: () => void;
	onNext: () => void;
	disablePrev: boolean;
	disableNext: boolean;
};

export const CarouselControls = ({
	onPrev,
	onNext,
	disablePrev,
	disableNext,
	className,
	...props
}: CarouselControlsProps) => {
	return (
		<div className={clsx(styles.controls, className)} {...props}>
			<IconButton disabled={disablePrev} onClick={onPrev}>
				<ArrowIcon />
			</IconButton>
			<IconButton disabled={disableNext} onClick={onNext}>
				<ArrowIcon />
			</IconButton>
		</div>
	);
};

CarouselControls.displayName = 'CarouselControls';
