import mongoose from 'mongoose';

const { Schema } = mongoose; // Деструктуризация
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: String,
});
export default mongoose.model('User', userSchema);
