"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var ModalStatus = _ref.ModalStatus,
      setModalStatus = _ref.setModalStatus,
      ModalContainerStyle = _ref.ModalContainerStyle,
      ModalBodyStyle = _ref.ModalBodyStyle,
      ModalInnerStyle = _ref.ModalInnerStyle,
      ModalCloseIconStyle = _ref.ModalCloseIconStyle,
      ModalChildren = _ref.ModalChildren;
  var modalContainer = {
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
    alignItems: "center"
  };
  var ModalBody = {
    backgroundColor: "white",
    borderRadius: "10px",
    width: "40%",
    height: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: "5rem",
    position: "relative"
  };
  var closeIcon = {
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
    cursor: "pointer"
  };
  var innerText = {
    marginLeft: "1rem"
  };

  if (ModalStatus === true) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: ModalContainerStyle ? ModalContainerStyle : modalContainer
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: ModalBodyStyle ? ModalBodyStyle : ModalBody
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: ModalInnerStyle ? ModalInnerStyle : innerText
    }, ModalChildren), /*#__PURE__*/_react.default.createElement("button", {
      style: ModalCloseIconStyle ? ModalCloseIconStyle : closeIcon,
      onClick: function onClick() {
        return setModalStatus(false);
      }
    }, "X")));
  } else {
    return null;
  }
};

Modal.propTypes = {
  ModalStatus: _propTypes.default.bool.isRequired,
  setModalStatus: _propTypes.default.func.isRequired,
  ModalContainerStyle: _propTypes.default.object,
  ModalBodyStyle: _propTypes.default.object,
  ModalInnerStyle: _propTypes.default.object,
  ModalCloseIconStyle: _propTypes.default.object,
  ModalChildren: _propTypes.default.string
};
var _default = Modal;
exports.default = _default;