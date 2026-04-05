'use client'

import styles from './About.module.scss'
import { motion } from 'framer-motion'

export default function About() {
	return (
		<section className={styles.about}>
			<div className={styles.about_me}>
				<span>About me</span>
				<motion.span
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: '100%', opacity: 1 }}
					transition={{
						type: 'spring',
						repeat: Infinity,
						repeatType: 'reverse',
						repeatDelay: 0.5,
					}}
					className={styles.border}
				/>
			</div>

			<div className={styles.texts}>
				<div className={styles.text}>
					<h3>Aspiring Software Engineer & AI Enthusiast</h3>
					<p>
						I am a Computer Science student at Guru Nanak Institute of
						Technology, currently maintaining a CGPA of 9.17. My focus is on
						Full Stack Development and Automation, where I enjoy building
						AI-integrated solutions that solve real-world problems.
					</p>
				</div>
				<div className={styles.text}>
					<h3>Building the Future with Agentic AI & Automation</h3>
					<p>
						As a leader in the <strong>UiPath Community (Kolkata)</strong> and a finalist at <strong>Hack4Bengal 4.0</strong>, I specialize in building <strong>Agentic AI systems</strong> like AutomatOS and real-time vision tools like SafeDrive AI.
					</p>
				</div>
				<div className={styles.text}>
					<p>
						I am passionate about learning new technologies and staying at the
						forefront of innovation, whether it’s through bridging natural language to system-level execution or building scalable,
						interactive web applications with Next.js and Three.js.
					</p>
				</div>
			</div>
		</section>
	)
}
