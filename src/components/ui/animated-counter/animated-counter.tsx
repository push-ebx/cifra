'use client';

import { AnimatePresence, motion } from 'motion/react';

type AnimatedCounterProps = {
	value: number | string;
	duration?: number;
	className?: string;
};

export const AnimatedCounter = ({
	value,
	duration = 0.3,
	className,
}: AnimatedCounterProps) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={value}
				animate={{ opacity: 1, y: 0 }}
				className={className}
				exit={{ opacity: 0, y: -20 }}
				initial={{ opacity: 0, y: 20 }}
				transition={{ duration }}
			>
				{value}
			</motion.div>
		</AnimatePresence>
	);
};

AnimatedCounter.displayName = 'AnimatedCounter';
