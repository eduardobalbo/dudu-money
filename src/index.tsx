import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Criação de Script - Discord Bot',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 13000,
          createdAt: new Date('2021-02-02 09:00:00')
        },
        {
          id: 2,
          title: 'GTX 3070 - Rig Mineração',
          type: 'withdraw',
          category: 'Compras - Eletrônicos',
          amount: 8000,
          createdAt: new Date('2021-02-05 19:00:00')
        },
        {
          id: 3,
          title: 'Fonte Corsair CX650 - Rig Mineração',
          type: 'withdraw',
          category: 'Compras - Eletrônicos',
          amount: 600,
          createdAt: new Date('2021-02-05 19:10:00')
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);