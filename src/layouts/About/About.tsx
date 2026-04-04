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
					<h3>Building the Future with Automation & AI</h3>
					<p>
						With hands-on experience in the MERN stack from my internship at
						Codesoft and active contributions in AI automation communities, I
						strive to create clean, efficient code. I’ve worked on projects
						ranging from real-time driver wellness monitors to Windows
						automation kernels using LLMs.
					</p>
				</div>
				<div className={styles.text}>
					<p>
						I am passionate about learning new technologies and staying at the
						forefront of innovation, whether it’s through participating in
						hackathons (like Hack4Bengal and InnoFusion) or building scalable
						web applications with Next.js and Three.js.
					</p>
				</div>
			</div>
		</section>
	)
}
