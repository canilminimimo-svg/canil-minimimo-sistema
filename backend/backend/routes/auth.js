const supabase = require('../config/supabase');
const express = require('express');
const router = express.Router();


// LOGIN SIMPLES (BASE)
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Email e senha obrigatórios' });
  }

  try {

    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('email', email)
      .eq('senha', senha)
      .single();

    if (error || !data) {
      return res.status(401).json({ erro: 'Usuário ou senha inválidos' });
    }

    return res.json({
      mensagem: 'Login realizado com sucesso',
      usuario: data
    });

  } catch (err) {
    return res.status(500).json({ erro: 'Erro no servidor' });
  }

});
