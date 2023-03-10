import User from './Model';

export default function deleteAll(req, res) {
  User.deleteMany()
    .then(() => {
      res.status(200).json('All deleted');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Delete got error');
    });
}
