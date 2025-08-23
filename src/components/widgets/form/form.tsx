'use client';

import { useState } from 'react';

import { Button, Description, Image, Input, Modal, Tab } from '@/components/ui';
import { Checkbox } from '@/components/ui/checkbox/checkbox';

import styles from './form.module.scss';

export const Form = () => {
	const [form, setForm] = useState({
		lastName: '',
		firstName: '',
		phone: '',
		telegram: '',
		school: '',
		track: 'Биотехнологии',
	});

	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleChange = (field: string, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setStatus('idle');

		try {
			const res = await fetch('/api/sendForm', {
				method: 'POST',
				body: JSON.stringify(form),
				headers: { 'Content-Type': 'application/json' },
			});

			const text = await res.text();
			let data;
			try {
				data = JSON.parse(text);
			} catch {
				data = { raw: text };
			}

			if (res.ok && data.status === 'success') {
				setStatus('success');
			} else {
				setStatus('error');
			}
		} catch (err: any) {
			setStatus('error');
		}

		setLoading(false);
	};

	return (
		<Modal>
			{status === 'success' ? (
				<div className={styles.form}>
					<Image
						alt="maskot"
						className={styles.maskot}
						src="/images/maskot-success.webp"
					/>
					<div className={styles.text}>
						<div className={styles.textForm}>
							<Description size={'xl'}>
								Юпи! Ты уже на шаг ближе к своей мечте!
							</Description>
							<Description size={'xs'}>Скоро мы с тобой свяжемся</Description>
						</div>
					</div>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<Description className={styles.title} size={'xl'}>
						Регистрируйся чтобы участвовать
					</Description>

					<Description className={styles.sectionTitle} size={'l'}>
						Трек
					</Description>
					<div className={styles.tabsWrapper}>
						<div className={styles.tabsDesktop}>
							<Tab
								isActive={form.track === 'Биотехнологии'}
								onClick={() => handleChange('track', 'Биотехнологии')}
							>
								<Description color={'violete'} size={'xs'}>
									Биотехнологии
								</Description>
							</Tab>
							<Tab
								isActive={form.track === 'IT'}
								onClick={() => handleChange('track', 'IT')}
							>
								<Description color={'violete'} size={'xs'}>
									IT
								</Description>
							</Tab>
						</div>
					</div>

					<div className={styles.inputsWrapper}>
						<Description className={styles.sectionTitle} size={'l'}>
							Контактные данные
						</Description>
						<Input
							onChange={(e) => handleChange('lastName', e.target.value)}
							placeholder={'Фамилия'}
							value={form.lastName}
						/>
						<Input
							onChange={(e) => handleChange('firstName', e.target.value)}
							placeholder={'Имя'}
							value={form.firstName}
						/>
						<div className={styles.rowInputs}>
							<Input
								onChange={(e) => handleChange('phone', e.target.value)}
								placeholder={'+7 (000) 000 00 00'}
								value={form.phone}
							/>
							<Input
								onChange={(e) => handleChange('telegram', e.target.value)}
								placeholder={'Telegram'}
								value={form.telegram}
							/>
						</div>
					</div>

					<Description className={styles.sectionTitle} size={'l'}>
						Твое учебное заведение
					</Description>
					<Input
						className={styles.learningInput}
						onChange={(e) => handleChange('school', e.target.value)}
						placeholder={'Введи название'}
						value={form.school}
					/>

					<Button
						className={styles.submitBtn}
						loading={loading}
						size={'m'}
						type="submit"
						variant={'primary'}
					>
						<Description className={styles.submitText} size={'m'}>
							принять участие
						</Description>
					</Button>

					<div className={styles.checkboxWrapper}>
						<Checkbox />
						<Description color={'darkGray'} size={'xxs'}>
							Я даю согласие на обработку персональных данных в соответствии c{' '}
							<a className={styles.link} href="#">
								политикой конфиденциальности
							</a>
						</Description>
					</div>

					{status === 'error' && (
						<div className={styles.form}>
							<Image
								alt="maskot"
								className={styles.maskot}
								src="/images/maskot-error.webp"
							/>
							<div className={styles.text}>
								<div className={styles.textForm}>
									<Description size={'xl'}>пу-пу-пуууууу</Description>
									<Description size={'xs'}>
										Люда нам **** что-то пошло не так
									</Description>
								</div>
							</div>
						</div>
					)}
				</form>
			)}
		</Modal>
	);
};

Form.displayName = 'Form';
