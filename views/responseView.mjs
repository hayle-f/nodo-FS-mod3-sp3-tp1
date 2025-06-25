export function renderizarSuperheroe(superheroe) {
    return {
        ID: superheroe._id,
        "Nombre Superheroe": superheroe.nombreSuperheroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen, 
        "Nombre Sociedad": superheroe.nombreSociedad,        
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        "Habilidad Especial": superheroe.habilidadEspecial,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos,
    };
}

export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}