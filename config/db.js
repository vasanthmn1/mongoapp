const mongoose = require('mongoose');
// const colors = require('colors')
mongoose.set('strictQuery', false)
const connetDB = async () => {
    try {
        const connet = await mongoose.connect(process.env.MONGO_URL);

        console.log(`mongo connet ${connet.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports = connetDB