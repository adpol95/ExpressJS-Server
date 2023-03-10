import User from './Model';

export default function userUpdateById(req, res) {
  const userId = req.params.id;

  User.findByIdAndUpdate(userId, req.body)
    .exec()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User update error');
    });
}
