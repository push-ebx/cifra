import { PlayIcon } from '@/components/icons';
import { Display, Image } from '@/components/ui';

import styles from './video-section.module.scss';

export const VideoSection = () => {
	return (
		<div className={styles.root}>
			<div className={styles.previewContainer}>
				<div className={styles.playButton}>
					<PlayIcon />
					<Display color="secondary" size="xs">
						жми плэээй
					</Display>
				</div>
				<Image
					alt="preview"
					className={styles.preview}
					src="/images/video-preiview.webp"
				/>
			</div>
		</div>
	);
};

VideoSection.displayName = 'VideoSection';
