import { modalBtn, modal } from './modules/elems.js';
import { modalController } from './modules/modalController.js';
import { previewController } from './modules/previewController.js';

modalController({
  modal,
  btn: modalBtn,
  classOpen: 'd-block',
  classClose: 'btn-close',
});

previewController();
