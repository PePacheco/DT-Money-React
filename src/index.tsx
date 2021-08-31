import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model, Request } from "miragejs";
import { App } from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento Back-end",
          type: "deposit",
          category: "Desenvolvimento",
          amount: 10000,
          createdAt: new Date()
        },
        {
          id: 2,
          title: "Conta de luz",
          type: "withdrawl",
          category: "Contas",
          amount: 2000,
          createdAt: new Date()
        },
        {
          id: 3,
          title: "Desenvolvimento de Aplicativo",
          type: "deposit",
          category: "Desenvolvimento",
          amount: 15000,
          createdAt: new Date()
        },
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request: Request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
