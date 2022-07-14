import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
/** Previous code **/
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './theme';

export default function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = async () => {
        const themeValue = theme === 'dark' ? 'light' : 'dark';
        setTheme(themeValue); 
    };
    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <Container>
                <Header>
                    <TitleText fontSize='24px'>Blog</TitleText>
                    <ThemeButton>
                        <ThemeButtonText onPress={() => toggleTheme()}>
                            {theme === 'dark' ? 'Light' : 'Dark'} Mode
                        </ThemeButtonText>
                    </ThemeButton>
                </Header>
         
         
                <StatusBar style='auto' />
            </Container>
        </ThemeProvider>
    );
}