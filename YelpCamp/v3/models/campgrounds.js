var camproundSchema = new mongoose.Schema({
      name: String,
      image: String,
      description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);