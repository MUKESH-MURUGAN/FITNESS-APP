const mongoose = require('mongoose');

const exerciseVideoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    category: { type: String, enum: ['Cardio', 'Strength', 'Yoga', 'Stretching', 'HIIT'], required: true },
    videoUrl: { type: String, required: true },
    duration: Number,
    difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    tags: [String],
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    reactions: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      emoji: String
    }],
    commentsEnabled: { type: Boolean, default: true }
}, { timestamps: true });
  
module.exports = mongoose.model('ExerciseVideo', exerciseVideoSchema);
  