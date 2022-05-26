db.produtos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
});

db.produtos.find({
  franquia: { $exists: true },
}, {
  _id: 0,
  franquia: 1,
  totalProdutos: 1,
});