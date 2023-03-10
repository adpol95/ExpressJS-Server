import User from './Model';

export default function userGetAll(req, res) {
  User.find()
    .exec()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Can not get cards');
    });
}
