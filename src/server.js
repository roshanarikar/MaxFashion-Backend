const app = require('./index');
const PORT = 5000;


app.listen(PORT, async () => {
    try {
        console.log('Listening on port 5000')
    } catch (err) {
        console.error(err.message);
    }
})