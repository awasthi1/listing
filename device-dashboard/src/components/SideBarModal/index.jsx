import './Modal.css';
function SidebarModal({ isOpen, onClose, children }) {
    return (
      <div className={`sidebar-overlay ${isOpen ? "show" : ""}`}>
        <div className="sidebar">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
          <div className="sidebar-content">{children}</div>
        </div>
      </div>
    );
  }
  
export default SidebarModal;
  