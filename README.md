# what is this?

Open/close and style your own modal in ReactJs.

# Installation

'npm i @claudedacc/modal'

Then...

```
import { Modal } from "@claudedacc/modal";

const [IsOpen, setIsOpen] = useState(true);

    <Modal
        ModalStatus ={IsOpen}
        setModalStatus ={setIsOpen}
        ModalContainerStyle ={{}}
        ModalBodyStyle ={{}}
        ModalInnerStyle ={{}}
        ModalCloseIconStyle ={{}}
        ModalChildren ={}
      >
      </Modal>
    </>
```

##Props

Modal supports several props:

- _ModalStatus_ - _boolean_ (value: true / false) --- Initial value of the modal status
- _setModalStatus_ - _function_ (value: true / false) --- Change the state of the Modal status
- _ModalContainerStyle_ - _object_ (default value {_ModalContainerStyle_} / {{custom style}}) --- custom your own modalContainerstyle
- _ModalBodyStyle_ - _object_ (default value {_ModalBodyStyle_}/ {{custom style}}) --- custom your own ModalBodyStyle style
- ModalInnerStyle - _object_ (default value {ModalInnerStyle}/ {{custom style}}) --- custom your own ModalInnerClass style
- _ModalCloseIconStyle_ - _object_ (default value {_ModalCloseIconStyle_} / {{custom style}}) --- custom your own ModalCloseIconStyle style
- _ModalChildren_ - _string_ (default value "" / {{custom input}}) --- custom your own inner Modal body.
