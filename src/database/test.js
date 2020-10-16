const Database = require('./db.js');
const saveOrphanange = require ('./saveOrphanange');

Database.then(async (db) => {
   /* // inserir dados na tabela
        await saveOrphanange(db, {
            name: "Centro de assistencia ao adolescente",
            lat: "-16.5062363",
            lng: "-49.4402552",
            about: "Centro de apoio a criança e adolescente",
            whatsapp: "62684665484",
            images: [
                "https://images.unsplash.com/photo-1562790519-60c4307f025f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
                "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    
            ].toString(),
            instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours: "horário das visitas das 8hrs às 18hrs",
            open_on_weekends: "1"
    
    
    
        }) */

    // consultar dados na tabela
    /* const selectedOrphananges = await db.all("SELECT * FROM orphananges");
     console.log(selectedOrphananges); */
    
    // consultar apenas 1 orfanato

   /* const orphanange = await db.all('SELECT * FROM orphananges WHERE id = "1"'); */
    

    // deletar um dado da tabela

    await db.run("DELETE FROM orphananges WHERE id='20'");
    
    
   
    
})

