fetch('https://api.exemplo.com/dados')
    .then(response => response.jason())
    .then(data => {
        console.log('Dados recebidos:', data);
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    });

    //SERVE PARA FAZER REQUISIÇÕES HTTP, COMO BUSCAR DADOS DE UMA API