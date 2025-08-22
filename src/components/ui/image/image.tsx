'use client';

import type { ComponentProps, CSSProperties } from 'react';
import { useState } from 'react';
import NexImage from 'next/image';

import { clsx } from 'clsx';

import styles from './image.module.scss';

export type ImageProps = ComponentProps<'img'> & {
	src: string;
	alt: string;
	objectFit?: CSSProperties['objectFit'];
	quality?: number;
	priority?: boolean;
};

export const Image = (props: ImageProps) => {
	const {
		className,
		style,
		sizes = '100vw',
		width,
		height,
		objectFit,
		quality = '100',
		priority,
		...restProps
	} = props;

	const [isLoading, setIsLoading] = useState(true);

	const handleLoad = () => {
		setIsLoading(false);
	};

	return (
		<div className={styles.root} data-loading={isLoading}>
			<NexImage
				className={clsx(styles.image, className)}
				height={0}
				onLoad={handleLoad}
				priority={priority}
				quality={quality}
				sizes={sizes}
				width={0}
				style={{
					...(width ? { '--image-width': width } : {}),
					...(height ? { '--image-height': height } : {}),
					...(objectFit ? { '--object-fit': objectFit } : {}),
					...style,
				}}
				{...restProps}
			/>
		</div>
	);
};

Image.displayName = 'Image';
