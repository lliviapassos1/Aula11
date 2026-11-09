// server.js
require('dotenv').config();

const express = require('express');
const supabase = require('./config/supabaseClient');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


// 1. GET GLOBAL - LISTAR TODOS OS TATUADORES

app.get('/tatuadores', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('artistas_tattoo')
            .select('*');

        if (error) {
            console.error('Erro no banco de dados:', error);

            return res.status(500).json({
                erro: 'Falha ao buscar dados na nuvem'
            });
        }

        return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({
            erro: 'Falha interna no servidor'
        });
    }
});


// 2. GET POR ID - BUSCAR UM TATUADOR

app.get('/tatuadores/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from('artistas_tattoo')
            .select('*')
            .eq('id', id)
            .single();

        if (error || !data) {
            return res.status(404).json({
                erro: 'Tatuador não encontrado'
            });
        }

        return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({
            erro: 'Falha na busca do tatuador'
        });
    }
});


// 3. GET COM ORDENAÇÃO POR EXPERIÊNCIA

app.get('/tatuadores-ordenados', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('artistas_tattoo')
            .select('*')
            .order('anos_experiencia', {
                ascending: false
            });

        if (error) throw error;

        return res.status(200).json(data);

    } catch (err) {
        return res.status(500).json({
            erro: 'Erro ao ordenar tatuadores'
        });
    }
});


// INICIALIZAÇÃO DO SERVIDOR

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}/tatuadores`);
});