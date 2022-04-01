import React from "react";

import Modal from "./Modal";

export default {
  title: "Example/Modal",
  component: Modal,
    argTypes: {
    ModalStatus: {
      name: "ModalStatus",
      type: { name: "string", required: true },
      description: "Declare Modal Status",
      control: {
        type: "boolean",
      },
    },
    setModalStatus: {
      name: "setModalStatus",
      type: { name: "string", required: true },
      description: "Modify Modal Status",
      control: {
        type: null,
      },
      action: "setModalStatus"
    },
    ModalContainerStyle: {
      name: "ModalContainerStyle",
      type: { name: "string" },
      description: "Style Modal container",
      control: {
        type: "object",
      },
    },
    ModalBodyStyle: {
      name: "ModalBodyStyle",
      type: { name: "string" },
      description: "Style Modal Body",
      control: {
        type: "object",
      },
    },
    ModalInnerStyle: {
      name: "ModalInnerStyle",
      type: { name: "string" },
      description: "Style Modal Children",
      control: {
        type: "object",
      },
    },
    ModalCloseIconStyle: {
      name: "ModalCloseIconStyle",
      type: { name: "string" },
      description: "Style Modal Close Icon",
      control: {
        type: "object",
      },
    },
    ModalChildren: {
      name: "ModalChildren",
      type: { name: "string" },
      description: "Modal children",
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'My Modal',
};