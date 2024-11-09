import React from 'react';
import './App.css';
import {Box} from "./componentsBox";
import {Button} from "./components/Button";
import {MainImage} from "./components/MainImage";
import {Text} from "./components/Text";
import {Container} from "./components/Container";
import {Wrapper} from "./components/Wrapper";
import {Title} from "./components/Title";


function App() {
    return (
        <div className="app">
            <Box>
                <Wrapper>
                    <Container>
                        <MainImage></MainImage>
                        <Title>Headline</Title>
                         <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                        <Button color={"#4E71FE"} textColor={"#f4f1f1"} isBordered={false}>See more</Button>
                        <Button color={"#f4f1f1"} textColor={"#4E71FE"} isBordered={true} >Save</Button>
                    </Container>
                </Wrapper>
            </Box>
        </div>

    )
}


export default App;
