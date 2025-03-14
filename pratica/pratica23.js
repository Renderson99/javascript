const produtos = [
    { id: 1, nome: "Camiseta", preco: 29.90, desconto: true, quantidade: 50 },
    { id: 2, nome: "Calça Jeans", preco: 89.90, desconto: false, quantidade: 30 },
    { id: 3, nome: "Tênis", preco: 129.99, desconto: true, quantidade: 20 },
    { id: 4, nome: "Mochila", preco: 59.90, desconto: false, quantidade: 15 },
    { id: 5, nome: "Relógio", preco: 199.00, desconto: true, quantidade: 10 },
    { id: 6, nome: "Boné", preco: 19.90, desconto: false, quantidade: 40 },
    { id: 7, nome: "Jaqueta", preco: 149.90, desconto: true, quantidade: 25 },
    { id: 8, nome: "Óculos de Sol", preco: 79.90, desconto: false, quantidade: 35 },
    { id: 9, nome: "Cinto", preco: 34.90, desconto: true, quantidade: 60 },
    { id: 10, nome: "Meia", preco: 9.90, desconto: false, quantidade: 100 }
  ];

  const abaixoDe100 = produtos.filter(preco => produtos.preco < 100)
  console.log(abaixoDe100)
