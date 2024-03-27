import reactImg from '../../assets/react-core-concepts.png'
import './Header.css' // CSS Import
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomTitle() {
	return reactDescriptions[Math.floor(Math.random() * (reactDescriptions.length + 1))]
}

export default function Header() {
	const description = getRandomTitle()

	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>{description} React concepts you will need for almost any app you are going to build!</p>
		</header>
	)
}
