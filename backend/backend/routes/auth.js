const express = require('express');
const router = express.Router();


// LOGIN SIMPLES (BASE)
router.post('/login', async (req, res) => {
const { email, senha } = req.body;


if (!email || !senha) {
return res.status(400).json({ erro: 'Email e senha obrigatórios' });
}


// Aqui depois vamos conectar com banco Supabase


return res.json({
mensagem: 'Login base funcionando',
usuario: email
});
});


module.exports = router;
