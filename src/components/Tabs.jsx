export default function Tabs({ children, buttons, ButtonContainer = 'menu' }) {
	// const ButtonContainer = buttonsContainer // must start Large Alphabet
	return (
		<>
			<ButtonContainer>{buttons}</ButtonContainer>
			{children}
		</>
	)
}
