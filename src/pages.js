
const Database = require('./database/db');
const saveOrphanange = require('./database/saveOrphanange');

module.exports = { 

    index(req, res){
        const cidade = 'Goianira';
        return res.render('index', { cidade })
    },

    async orphanange(req, res) {
        
        const id = req.query.id;

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphananges WHERE id = ${id}`);
            const orphanange = results[0];

            orphanange.images = orphanange.images.split(",");
            orphanange.firstImage = orphanange.images[0];

            orphanange.open_on_weekends == "0" ? orphanange.open_on_weekends = false : orphanange.open_on_weekends = true;

            console.log(orphanange[0]);
            return res.render('orphanange', { orphanange });
        } catch (error) {
            console.log(error)
            return res.send('Deu erro no banco de dados')
        }
    },

    async orphanangeList(req, res) {
        try {
            return res.render('orphanangeList');
        } catch (error) {
            console.log(error)
            return res.send('erro no banco de dados!')
        }
    },

    async orphananges(req, res) {
        try {
            const db = await Database;
            const orphananges = await db.all("SELECT * FROM orphananges");
            return res.render('orphananges', { orphananges });
        } catch (error) {
            console.log(error)
            return res.send('erro no banco de dados!')
        }
        
    },

    createOrphanange(req, res) {
        return res.render('create-orphanange');
    },

    async saveOrphanange(req, res) {
        const fields = req.body;

        if (Object.values(fields).includes('')) {
            return res.send('todos os campos devem ser preenchidos!')
        } 

        try {
               // salvar um orfanato
            const db = await Database
            await saveOrphanange(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends
            })

            //return to current page

            return res.redirect('/orphananges')
        } catch (error) {
            console.log(error)
            return res.send('Erro no cadastro!');
            
        }

 }

}