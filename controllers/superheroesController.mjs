import { obtenerSuperHeroePorId, obtenerTodosLosSuperHeroes, buscarSuperHeroePorAtributo, obtenerSuperHeroesMayoresA100, crearNuevoSuperHero, modificarSuperHero, eliminarSuperHeroPorID, eliminarSuperHeroPorNombre } from '../services/superHeroService.mjs';

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
        res.status(500).send({ mensaje: 'Error al obtener el superheroe.', error: error.message });
    }
    
}

// obtener todos los superheroes
export async function obtenerTodosLosSuperHeroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperHeroes();

        const superHeroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superHeroesFormateados);
    } catch(error) {
         res.status(500).send({ mensaje: 'Error al obtener los superheroes.', error: error.message });
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
        res.status(500).send({ mensaje: 'Error al buscar los superheroes', error: error.message });
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
        res.status(500).send({ mensaje: 'Error al obtener superheroes mayores a 30', error: error.message });
    }
    
}

// Crear nuevo superheroe
export async function crearNuevoSuperHeroController(req, res) {
    try {
        const heroDatos = req.body;
        
        if (
            !heroDatos.nombreSuperheroe?.trim() ||
            !heroDatos.nombreReal?.trim() ||
            typeof heroDatos.edad !== 'number' || heroDatos.edad < 0
        ) {
        return res.status(400).send({ mensaje: 'Faltan datos válidos del superhéroe' });
        }

        const nuevoSuperheroe = await crearNuevoSuperHero(heroDatos);

        const nuevoSuperHeroeFormateado = renderizarSuperheroe(nuevoSuperheroe);
        res.status(200).json(nuevoSuperHeroeFormateado);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al crear el nuevo superheroe', error: error.message });
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
        
        const superHeroeModifFormateado = renderizarSuperheroe(superHeroeModificado);
        res.status(200).json(superHeroeModifFormateado);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al modificar el superheroe', error: error.message });
    }
    
}

// Eliminar superheroe por ID
export async function eliminarSuperHeroPorIDController(req, res) {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).send({ mensaje: 'ID no proporcionado' });
        }

        const deletedSuperHeroe = await eliminarSuperHeroPorID(id);

        if (!deletedSuperHeroe) {
            return res.status(404).send({ mensaje: 'No se encontró un superhéroe con ese ID' });
        }

        const deletedSuperHeroeFormateado = renderizarSuperheroe(deletedSuperHeroe);
        res.status(200).json(deletedSuperHeroeFormateado);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superheroe', error: error.message });
    }
    
}

// Eliminar superheroe por Nombre
export async function eliminarSuperHeroPorNombreController(req, res) {
    try {
        const { nombreSuperheroe } = req.params;
        
        if(!nombreSuperheroe) {
            return res.status(400).send({ mensaje: 'Nombre del superheroe no proporcionado' });
        }

        const deletedSuperHeroe = await eliminarSuperHeroPorNombre(nombreSuperheroe);

        if (!deletedSuperHeroe) {
            return res.status(404).send({ mensaje: 'No se encontró un superhéroe con ese nombre' });
        }

        const deletedSuperHeroeFormateado = renderizarSuperheroe(deletedSuperHeroe);
        res.status(200).json(deletedSuperHeroeFormateado);
        
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superheroe', error: error.message });
    }
    
}
