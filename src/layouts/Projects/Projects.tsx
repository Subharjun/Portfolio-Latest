'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Project } from '@/components/Project/Project'
import styles from './Projects.module.scss'
import { MouseEvent, useRef, useState } from 'react'
import { projects } from './Projects.data'

export default function Projects() {
	return (
		<section className={styles.projects}>
			<div className={styles.title}>
				<h1>Projects</h1>
			</div>
			<div className={styles.container}>
				<div className={styles.horizontal_scroll_container}>
					{projects.map(({ id, title, description, img, link }) => {
						return (
							<div key={id} className={styles.project_wrapper}>
								<Project
									title={title}
									description={description}
									img={img}
									link={link}
								/>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
