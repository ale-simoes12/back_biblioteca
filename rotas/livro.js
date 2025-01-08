const {Router} =  require("express")
const {getLivros,getLivro,postLivro} = require("../controladores/livro")
const router = Router()


router.get("/", getLivros);

router.get("/:id", getLivro);

router.post("/", postLivro);

router.delete("/",(req,res)=>{
    res.send("requ del")

})

router.patch("/",(req,res)=>{
    res.send("requ patch")

})

module.exports = router 