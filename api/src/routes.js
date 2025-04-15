const express = require('express');
const automovelController = require('./controllers/automovel');
const estadiaController = require('./controllers/estadia');

const router = express.Router();
router.get('/', (req, res) => {
  res.send('API is running...').end();
});

router.post('/automoveis', automovelController.create);
router.get('/automoveis', automovelController.read);
router.get('/automoveis/:placa', automovelController.readone);
router.put('/automoveis/:placa', automovelController.update);
router.delete('/automoveis/:placa', automovelController.deleteAutomovel);

router.post('/estadias', estadiaController.create);
router.get('/estadias', estadiaController.read);
router.get('/estadias/:id', estadiaController.readOne);
router.put('/estadias/:id', estadiaController.update);
router.delete('/estadias/:id', estadiaController.remove);

module.exports = router;