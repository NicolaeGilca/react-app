import { ChatContactList } from "./chat-contact-list";
import { ChatStartDiscussionButton } from "./chat-start-discussion-button";

export function ChatStartDiscussionModal({ setModalVisible }) {
  return (
    <div className="chat-modal">
      <ChatContactList />
      <ChatStartDiscussionButton />
      <button
        className="chat-modal-close-btn"
        onClick={() => {
          setModalVisible(false);
        }}
      >
        Close
      </button>
    </div>
  );
}
