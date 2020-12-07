const db = require("../../data/dbConfig");

module.exports = {
    getAll() {
        return db('accounts');
    }, 
    getById(id) {
        // .first() will return the first match - we know the id is unique so this sends back 
        // a single object vs. a array with a single obj init. 
        return db('accounts').where('id', id).first();
    }, 
    create(post) {
        return db('accounts').insert(post)
            .then(([id]) => {
                return db('accounts').where('id', id).first();
            })
    }
};