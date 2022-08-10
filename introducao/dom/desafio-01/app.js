new Vue({
    el: '#desafio',
    data: {
        nome: 'Fulano',
        idade: 34,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeVezesTres(){                
            return this.idade * 3
        },
        random(){                
            return Math.random()
        }
    }
})
