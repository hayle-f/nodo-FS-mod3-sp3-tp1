import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        return await SuperHero.find({ [atributo]: valor });
    }

    async obtenerMayoresA100() {
        return await SuperHero.find({ edad: { $gt: 100 }});
    }
    
    async crearNuevo(heroDatos) {
        return await SuperHero.create(heroDatos);
    }
    
    async modificar(id, datos) {
        return await SuperHero.findByIdAndUpdate(id, datos, {new: true});
        
    }

    async eliminarPorID(id) {
        return await SuperHero.findByIdAndDelete(id);
    }

    async eliminarPorNombre(nombreSuperheroe) {
        return await SuperHero.findOneAndDelete({ nombreSuperheroe });
    }
}

export default new SuperHeroRepository;