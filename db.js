const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.ServiceURI);

(async () => {
    try {
        await sequelize.authenticate();
    } catch (err) {
        console.log(err);
    }
})();

module.exports = sequelize;