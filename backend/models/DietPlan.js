const dietPlanSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    title: { type: String, required: true },
    description: String,
    meals: [{
      time: { type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'], required: true },
      items: [String]
    }],
    caloriesPerDay: Number,
    tags: [String],
    isPublic: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }, { timestamps: true });
  
  module.exports = mongoose.model('DietPlan', dietPlanSchema);
  