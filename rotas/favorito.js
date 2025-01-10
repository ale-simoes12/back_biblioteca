const {Router} =  require("express")
const {getLivrosFavoritos,postFavorito,deleteFavorito} = require("../controladores/favorito");
const router = Router()


router.get("/", getLivrosFavoritos);
router.put("/:id", postFavorito);
router.delete('/:id', deleteFavorito)


module.exports = router 