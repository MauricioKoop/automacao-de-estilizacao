import React from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import Person from "./img/person.jpg";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0 auto;
`;

const App = () => {
	return(
		<Container>
			<ProfileCard 
				image={Person}
				name="Mauricio Eduardo"
				description="Esse é um componente ProfileCard"
			/>
		</Container>
	);
};

export default App;
