

function saveOrphanange (db, orphanange) {
    return db.run(`
    INSERT INTO orphananges (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) values (
        "${orphanange.lat}",
        "${orphanange.lng}",
        "${orphanange.name}",
        "${orphanange.about}",
        "${orphanange.whatsapp}",
        "${orphanange.images}",
        "${orphanange.instructions}",
        "${orphanange.opening_hours}",
        "${orphanange.open_on_weekends}"
    );
`)
};


module.exports = saveOrphanange;