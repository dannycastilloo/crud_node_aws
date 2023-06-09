const controller = {};

controller.list = (req,res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contacto', (err, contactos) => {
            if (err) {
                res.json(err);
            }
            res.render('contactos', {
                data: contactos
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO contacto set ?', [data], (err, contacto) => {
            res.redirect('/');
        });
    })
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contacto WHERE id = ?', [id], (err, contacto) => {
            res.render('contacto_edit', {
                data: contacto[0]
            })
        })
    });
}

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE contacto set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM contacto WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    })
};

module.exports = controller;