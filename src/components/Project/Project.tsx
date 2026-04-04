import { motion } from 'framer-motion'
import styles from './Project.module.scss'

interface Props {
	title: string
	description: string
	img?: string
	link?: string
}

export function Project({ title, description, img, link }: Props) {
	return (
		<motion.a
			href={link}
			target='_blank'
			rel='noopener noreferrer'
			className={styles.project}
		>
			<div className={styles.img_viewport}>
				<img src={img} alt={title} className={styles.project_img} />
			</div>
			<div className={styles.text_container}>
				<div className={styles.title_row}>
					<h3>{title}</h3>
				</div>
				<p className={styles.description}>{description}</p>
			</div>
		</motion.a>
	)
}
