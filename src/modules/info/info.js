const store = [];

// Функция контроллер
export default function info(req, res) {
  store.push(req.body.name);
  res.status(200).json(store); //Вместо send ставим json
} //Роутниг
