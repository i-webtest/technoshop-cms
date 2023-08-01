import { modalBtn, modal } from './modules/elems.js';
import { formController } from './modules/formController.js';
import { modalController } from './modules/modalController.js';
import { previewController } from './modules/previewController.js';
import { tableController } from './modules/tableController.js';

const init = () => {
  modalController({
    btn: modalBtn,
  });

  previewController();
  tableController();
  formController();
};

init();
