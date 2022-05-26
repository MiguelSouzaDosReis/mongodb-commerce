db.produtos.find({
  $and: [
    { proteínas: { $gte: 30 } },
    { proteínas: { $lte: 40 } },
  ],
}, {
  _id: 0,
  nome: 1,
});