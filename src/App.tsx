import React from 'react';
import styled from 'styled-components';
import ConversationHistory from './components/ConversationHistory';
import FloatingElements from './components/FloatingElements';
import ParticleBackground from './components/ParticleBackground';
import VoiceCard from './components/VoiceCard';
import { useVoiceAssistant } from './hooks/useVoiceAssistant';
import GlobalStyles from './styles/GlobalStyles';
const App: React.FC = () => {
const {
isListening,
isProcessing,
isSpeaking,
currentTranscript,
messages,
toggleListening,
} = useVoiceAssistant();
return (
<>
<GlobalStyles />
<AppWrapper>
<ParticleBackground />
<FloatingElements />
<MainContent>
<VoiceCard
isListening={isListening}
isProcessing={isProcessing}
isSpeaking={isSpeaking}
currentTranscript={currentTranscript}
onToggleListening={toggleListening}
/>
</MainContent>
<ConversationHistory messages={messages} />
</AppWrapper>
</>
);
};
const AppWrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
overflow: hidden;
position: relative; /* Add position relative for context /
background-color: #f0f2f5; / A base background color */
/* On mobile screens, stack the components vertically */
@media (max-width: 600px) {
flex-direction: column;
}
`;
const MainContent = styled.main`
flex-grow: 1;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
position: relative; /* Ensure it has a stacking context /
z-index: 10; / Keep it above background elements */
/* On mobile, it should occupy the top half of the screen /
@media (max-width: 600px) {
height: 50vh;
flex-grow: 0; / Disable flex-grow in column layout */
}`;
export default App;