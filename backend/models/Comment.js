const commentSchema = new mongoose.Schema({
    contentId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Could be Article, Video, etc.
    contentType: { type: String, enum: ['Article', 'ExerciseVideo'], required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    parentCommentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: null }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Comment', commentSchema);