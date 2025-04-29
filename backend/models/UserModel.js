const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['user', 'coach', 'admin'], default: 'user' },
  isEmailVerified: { type: Boolean, default: false },
  resetToken: String,
  resetTokenExpiry: Date,

  favoriteArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  favoriteVideos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ExerciseVideo' }],
  favoriteDiets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DietPlan' }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
