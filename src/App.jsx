import './App.css'
import { ChatControls } from './components/chat-controls'
import { ChatDiscussionList } from './components/chat-discussion-list'
import { ChatLayout } from './components/chat-layout'
import { ChatMessage } from './components/chat-message'
import { ChatStartDiscussionModal } from './components/chat-start-discussion-modal'

function App() {

return <>
        {false && <ChatStartDiscussionModal/>}
        <ChatLayout 
        controls={<ChatControls/>}
        aside={<ChatDiscussionList/>}
        main={<ChatMessage/>}
        />

      </>
 
}

export default App
