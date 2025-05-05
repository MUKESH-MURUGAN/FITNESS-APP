const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['Fitness', 'Wellness', 'Diet', 'Workout'], required: true },
  visibility: { type: String, enum: ['public', 'private', 'members'], default: 'public' },
  mediaAttachments: [String],

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  ratings: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number, min: 1, max: 5 }
  }],
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
