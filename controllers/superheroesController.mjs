import { obtenerSuperHeroePorId, obtenerTodosLosSuperHeroes, buscarSuperHeroePorAtributo, obtenerSuperHeroesMayoresA100, crearNuevoSuperHero, modificarSuperHero } from '../services/superHeroService.mjs';

import { renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs';


//Obtener superheroe por ID
export async function obtenerSuperHeroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperHeroePorId(id);
        if(!superheroe) {
            return res.status(404).send({mensaje: 'Superheroe no encontrado.' });
        }

        const superHeroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superHeroeFormateado);
    } catch(error) {
        res.status(500).send({ mensaje: 'Error al obtener el superheroe.', error: error.mensaje });
    }
    
}

// obtener todos los superheroes
export async function obtenerTodosLosSuperHeroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperHeroes();

        const superHeroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superHeroesFormateados);
    } catch(error) {
         res.status(500).send({ mensaje: 'Error al obtener los superheroes.', error: error.mensaje });
    }
    
}

// Buscar superheroe por atributo:valor
export async function buscarSuperHeroePorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperHeroePorAtributo(atributo, valor);

        if(superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superheroes con ese atributo'});
        }

        const superHeroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superHeroesFormateados);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los superheroes', error: error.mensaje });
    }
    
}

// obtener superheroes mayores a 100
export async function obtenerSuperHeroesMayoresA100Controller(req, res) {
    try {
        const superheroes = await obtenerSuperHeroesMayoresA100();
        if(superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superheroes mayores a 30 años' });
        }

        const superHeroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superHeroesFormateados);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superheroes mayores a 30', error: error.mensaje });
    }
    
}

// Crear nuevo superheroe
export async function crearNuevoSuperHeroController(req, res) {
    try {
        const { nombreSuperheroe, nombreReal, edad } = req.body;
        
        if(!nombreSuperheroe || !nombreReal || edad < 0) {
            return res.status(400).send({ mensaje: 'Faltan datos del superheroe' });
        }

        const nuevoSuperheroe = await crearNuevoSuperHero({ nombreSuperheroe, nombreReal, edad });

        const nuevoSuperHeroeFormateado = renderizarSuperheroe(nuevoSuperheroe);
        res.status(200).json(nuevoSuperHeroeFormateado);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al crear el nuevo superheroe', error: error.mensaje });
    }
    
}


// Modificar superheroe
export async function modificarSuperHeroController(req, res) {
    try {
        const { id } = req.params;
        const datos = req.body;
        
        if(!id) {
            return res.status(400).send({ mensaje: 'No se encontro el superheroe para modificar' });
        }
        if(!datos) {
            return res.status(400).send({ mensaje: 'No se ingresaron datos para modificar' });
        }

        const superHeroeModificado = await modificarSuperHero(id, datos);

        console.log(superHeroeModificado);
        const superHeroeModifFormateado = renderizarSuperheroe(superHeroeModificado);
        res.status(200).json(superHeroeModifFormateado);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al modificar el superheroe', error: error.mensaje });
    }
    
}

// Eliminar superheroe por ID
export async function eliminarSuperHeroPorIDController(req, res) {
    try {
        const { id } = req.params;
        
        if(!id) {
            return res.status(400).send({ mensaje: 'No se encontro el superheroe' });
        }

        const deletedSuperHeroe = await eliminarSuperHeroPorID(id);

        const deletedSuperHeroeFormateado = renderizarSuperheroe(deletedSuperHeroe);
        res.status(200).json(deletedSuperHeroeFormateado);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superheroe', error: error.mensaje });
    }
    
}

// Eliminar superheroe por Nombre
export async function eliminarSuperHeroPorNombreController(req, res) {
    try {
        const { nombreSuperheroe } = req.body;
        
        if(!nombreSuperheroe) {
            return res.status(400).send({ mensaje: 'No se encontro el superheroe' });
        }

        const deletedSuperHeroe = await eliminarSuperHeroPorNombre(nombreSuperheroe);

        const deletedSuperHeroeFormateado = renderizarSuperheroe(deletedSuperHeroe);
        res.status(200).json(deletedSuperHeroeFormateado);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superheroe', error: error.mensaje });
    }
    
}
