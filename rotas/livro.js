const {Router} =  require("express")
const {getLivros,getLivro} = require("../controladores/livro")
const router = Router()


router.get("/", getLivros);

router.get("/:id", getLivro);

router.post("/",(req,res)=>{
    res.send("requ post")

})

router.delete("/",(req,res)=>{
    res.send("requ del")

})

router.patch("/",(req,res)=>{
    res.send("requ patch")

})

module.exports = router 