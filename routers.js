const Router = require('express');
const router = new Router();
const controllers = require('./controllers');
const {check} = require('express-validator');

router.post('/create-entry', [
    check('title', "Поле 'Название' не может быть пустым").notEmpty(),
    check('price', "Поле 'Сумма' не может быть пустым").notEmpty(),
    check('day', "Поле 'Число' не может быть пустым").notEmpty(),
    check('day', "Поле 'Число' дольжно состоять минимум из 2 чисел").isLength({max: 2}),
    check('month', "Поле 'Месяц' не может быть пустым").notEmpty(),
    check('month', "Поле 'Месяц' должно состоять минимум из 2 чисел").isLength({max: 2}),
    check('year', "Поле 'Год' не может быть пустым").notEmpty(),
    check('year', "Поле 'Год' должно состоять минимум из 4 чисел").isLength({max: 4}),
], controllers.createEntry);
router.get('/entry', controllers.entry);

module.exports = router;