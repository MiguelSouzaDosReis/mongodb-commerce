db.produtos.updateOne({
  nome: "Big Mac",
}, {
 $push: {
   ingredientes: {
     $each: ["bacon"],
     $position: 8,
   },
 },
});

db.produtos.updateOne({
  nome: "Quarteirão com Queijo",
}, {
 $push: {
   ingredientes: {
     $each: ["bacon"],
     $position: 8,
   },
 },
});

db.produtos.find({}, {
 _id: 0,
 nome: 1,
 ingredientes: 1,
});