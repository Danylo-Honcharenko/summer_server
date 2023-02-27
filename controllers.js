const Entry = require('./db_entry');
const moment = require('moment');
const {validationResult} = require('express-validator');
class Controllers {
    async createEntry(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({errorMess: "Ошибка при заполнении", errors})
            }
            const {title, price, day, month, year} = req.body;
            const dateCreate = moment().format("DD/MM/YYYY");
            const dateBuy = `${day}.${month}.${year}`;
            const entry = new Entry({title, price, dateCreate, dateBuy});
            await entry.save();
            setTimeout(async () => {
                await Entry.deleteMany();
            }, 900000);
            return res.status(200).json({mess: 'Запись успешно создана'});
        }catch (e) {
            console.log(e)
            res.status(400).json({mess: 'Creating error'})
        }
    }

    async entry(req, res) {
        try {
            const entry = await Entry.find();
            if(entry.length > 0) {
                res.json(entry);
            } else {
                res.status(400).json({mess: 'Записей расходов нет, но вы можете добавить запись'})
            }
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new Controllers();