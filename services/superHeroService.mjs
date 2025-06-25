import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

// Obtener un superheroe por id
export async function obtenerSuperHeroePorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

// Obtener todos los superheroes
export async function obtenerTodosLosSuperHeroes() {
    return await SuperHeroRepository.obtenerTodos();
}

// Buscar por atributo:valor
export async function buscarSuperHeroePorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

// obtener superheroes mayores a 100 
export async function obtenerSuperHeroesMayoresA100() {
    return await SuperHeroRepository.obtenerMayoresA100();
}

// Crear un nuevo superheroe
export async function crearNuevoSuperHero(heroDatos) {
    return await SuperHeroRepository.crearNuevo(heroDatos);
}

// Modificar un superheroe
export async function modificarSuperHero(id, datos) {
    return await SuperHeroRepository.modificar(id, datos);
}

// Eliminar un superheroe por ID
export async function eliminarSuperHeroPorID(id) {
    return await SuperHeroRepository.eliminarPorID(id);
}

// Eliminar un superheroe por Nombre
export async function eliminarSuperHeroPorNombre(nombreSuperheroe) {
    return await SuperHeroRepository.eliminarPorNombre(nombreSuperheroe);
}
