'use client';

import { Bubble } from '@ant-design/x';
import React from 'react';

import styles from './page.module.css';

const Page = () => {
	return (
		<div className={styles['home']}>
			<Bubble content="Hello world!" />
		</div>
	);
};

export default Page;
