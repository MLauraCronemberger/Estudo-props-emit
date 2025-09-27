import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

class SerieService {
  // GET /serie/cadastradas
  seriesCadastradas() {
    return api.get("/serie/cadastradas");
  }

  // POST /serie/cadastrar
  cadastrarSerie(serie) {
    return api.post("/serie/cadastrar", serie);
  }
}

export default new SerieService();
