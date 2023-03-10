import mongoose from 'mongoose';

function dbConnect() {
  mongoose.connect('mongodb://127.0.0.1:27017/express', {
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('CONNECTED');
  });
}

export default dbConnect;
