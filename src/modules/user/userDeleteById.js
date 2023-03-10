import User from './Model';

export default function userDeleteById(req, res) {
  const userId = req.params.id;
  User.deleteOne({ _id: userId })
    .then(() => {
      res.status(200).json('User deleted');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Can not get user');
    });
}
