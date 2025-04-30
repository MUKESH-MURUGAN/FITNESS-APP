const notificationSchema = new mongoose.Schema({
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    link: String,
    isRead: { type: Boolean, default: false }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Notification', notificationSchema);
  