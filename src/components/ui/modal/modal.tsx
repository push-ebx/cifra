'use client';

import type { FC, MouseEvent, ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname, useRouter } from 'next/navigation';

import { CrossIcon } from '@/components/icons/cross-icon';
import { useScrollLock } from '@/hooks/client';

import styles from './modal.module.scss';

interface ModalProps {
	children: ReactNode;
	className?: string;
}

export const Modal: FC<ModalProps> = ({ children, className }) => {
	const router = useRouter();
	const pathname = usePathname();

	const [mounted, setMounted] = useState(false);
	const [hash, setHash] = useState('');
	const [search, setSearch] = useState(''); // ← текущее ?query
	const [isVisible, setIsVisible] = useState(false); //
	const [animateIn, setAnimateIn] = useState(false); //

	// синхронизация с адресной строкой
	useEffect(() => {
		setMounted(true);
		setHash(window.location.hash || '');
		setSearch(window.location.search || '');

		// слушаем изменения истории и назад/вперёд
		const patch = (type: 'pushState' | 'replaceState') => {
			const orig = history[type];
			// @ts-nocheck
			history[type] = function (...args) {
				// @ts-nocheck
				const ret = orig.apply(this, args);
				window.dispatchEvent(new Event(type));
				return ret;
			};
			return () => {
				// @ts-nocheck
				history[type] = orig;
			};
		};

		const onUrlChange = () => setSearch(window.location.search || '');

		const unpatchPush = patch('pushState');
		const unpatchReplace = patch('replaceState');
		window.addEventListener('popstate', onUrlChange);
		window.addEventListener('pushState', onUrlChange);
		window.addEventListener('replaceState', onUrlChange);

		return () => {
			unpatchPush();
			unpatchReplace();
			window.removeEventListener('popstate', onUrlChange);
			window.removeEventListener('pushState', onUrlChange);
			window.removeEventListener('replaceState', onUrlChange);
		};
	}, []);

	const params = new URLSearchParams(search);
	const isOpen = params.get('modal') === 'true';

	useScrollLock(isOpen, 0, 'fixed');

	const buildHref = useCallback(
		(open: boolean) => {
			const p = new URLSearchParams(search);
			if (open) p.set('modal', 'true');
			else p.delete('modal');
			const qs = p.toString();
			return qs ? `${pathname}?${qs}${hash}` : `${pathname}${hash}`;
		},
		[hash, pathname, search]
	);

	const closeModal = useCallback(() => {
		router.replace(buildHref(false), { scroll: false });
	}, [buildHref, router]);

	const onOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) closeModal();
	};

	// Esc для закрытия
	useEffect(() => {
		if (!isOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeModal();
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [isOpen, closeModal]);

	// плавное появление/исчезновение
	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
			requestAnimationFrame(() => setAnimateIn(true));
		} else if (isVisible) {
			setAnimateIn(false);
			const t = setTimeout(() => setIsVisible(false), 250);
			return () => clearTimeout(t);
		}
	}, [isOpen, isVisible]);

	if (!mounted || !isVisible) return null;

	return createPortal(
		<div
			aria-label="Модальное окно"
			aria-modal="true"
			className={`${styles.overlay} ${animateIn ? styles.overlayShown : ''}`}
			onClick={onOverlayClick}
			role="dialog"
		>
			<div
				className={`${styles.content} ${animateIn ? styles.contentShown : ''} ${className}`}
				onClick={(e) => e.stopPropagation()}
			>
				<CrossIcon
					className={styles.crossIcon}
					height="1.5rem"
					onClick={closeModal}
					width="1.5rem"
				/>
				{children}
			</div>
		</div>,
		document.body
	);
};

Modal.displayName = 'Modal';
