const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    url: { type: String, required: true },
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String }, // image, video, pdf, etc.
    altText: String,
    size: Number
}, { timestamps: true });
  
module.exports = mongoose.model('Media', mediaSchema);
  