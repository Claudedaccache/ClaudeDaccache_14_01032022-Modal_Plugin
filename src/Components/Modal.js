import React from "react";
import PropTypes from "prop-types";

const Modal = ({
  ModalStatus,
  setModalStatus,
  ModalContainerStyle,
  ModalBodyStyle,
  ModalInnerStyle,
  ModalCloseIconStyle,
  ModalChildren,
}) => {
  const modalContainer = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.75)",
    zIndex: 100000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const ModalBody = {
    backgroundColor: "white",
    borderRadius: "10px",
    width: "40%",
    height: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "5rem",
    position: "relative",
  };

  const closeIcon = {
    position: "absolute",
    top: "-0.5rem",
    right: "-0.5rem",
    backgroundColor: "black",
    borderRadius: "50%",
    color: "white",
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
  };

  const innerText = {
    marginLeft: "1rem",
  };

  if (ModalStatus === true) {
    return (
      <div style={ModalContainerStyle ? ModalContainerStyle : modalContainer}>
        <div style={ModalBodyStyle ? ModalBodyStyle : ModalBody}>
          <div style={ModalInnerStyle ? ModalInnerStyle : innerText}>
            {ModalChildren}
          </div>
          <button
            style={ModalCloseIconStyle ? ModalCloseIconStyle : closeIcon}
            onClick={() => setModalStatus(false)}
          >
            X
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

// Modal.propTypes = {
//   ModalStatus: PropTypes.bool.isRequired,
//   setModalStatus: PropTypes.func.isRequired,
//   ModalContainerStyle: PropTypes.object,
//   ModalBodyStyle: PropTypes.object,
//   ModalInnerStyle: PropTypes.object,
//   ModalCloseIconStyle: PropTypes.object,
//   ModalChildren: PropTypes.string,
// };

export default Modal;
