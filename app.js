const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    const queryName = req.query.name;
    const queryImage = req.query.image;
    const queryTop = req.query.top ;
    const queryLeft = req.query.left ;
    const queryRight = req.query.right ;
    const queryBottom = req.query.bottom ;

    res.render('index', {
        queryName,
        queryImage,
        queryTop,
        queryLeft,
        queryRight,
        queryBottom
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

