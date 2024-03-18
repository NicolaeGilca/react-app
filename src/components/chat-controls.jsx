export function ChatControls({ setModalVisible, isModalVisible }) {
  return (
    <div className="chat-controls">
      <button
        className={`chat-controls-btn ${isModalVisible ? "is-active" : ""}`}
        onClick={() => {
          setModalVisible(true);
        }}
      >
        Show modal
      </button>
      <button
        className={`chat-controls-btn ${!isModalVisible ? "is-active" : ""}`}
        onClick={() => {
          setModalVisible(false);
        }}
      >
        Hide modal
      </button>
      <button
        className="chat-controls-btn"
        onClick={() => {
          setModalVisible((prev) => !prev);
        }}
      >
        Toggle modal
      </button>
    </div>
  );
}
