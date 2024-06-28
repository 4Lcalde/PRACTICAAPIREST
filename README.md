Este proyecto de API REST genera una base de datos con la cual relacionar peleadores de distintas disciplinas con competiciones deportivas.

Para llevarla a cabo se han generado dos modelos paralelos. Peleadores y Competiciones.

Competiciones tiene las siguientes rutas:

competicionRoutes.get('/:id', getCompeticiones) // Muestra los datos asociados a una competicion específica
competicionRoutes.get('/', getCompeticion) // Muestra el global de competiciones
competicionRoutes.post('/', postCompeticion) // Permite crear competiciones
competicionRoutes.put('/:id', updateCompeticion) // Permite editar competiciones
competicionRoutes.delete('/:id', deleteCompeticion) // Permite borrar competiciones

Peleadores tiene las siguientes rutas:

peleadorRoutes.get('/', getPeleador) // Muestra el global de peleadores
peleadorRoutes.post('/', postPeleador) // Permite crear peleadores
peleadorRoutes.put('/:id', updatePeleador) // Permite editar peleadores
peleadorRoutes.delete('/:id', deletePeleador) // Permite borrar peleadores
# PRACTICAAPIREST
