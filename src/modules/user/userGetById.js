import User from './Model';

export default function userGetById(req, res) {
  User.findById(req.params.id)
    .exec()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Can not get user');
    });
}
