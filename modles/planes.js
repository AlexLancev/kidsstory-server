const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    imagePreview: {
      type: String,
      required: true,
    },
    nameTeacher: {
      type: String,
      required: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "team" }
);

const Team = mongoose.model("Team", teamSchema);
module.exports.Team = Team;

const reviewsSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    whoseReview: {
      type: String,
      required: true,
    },
    sity: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "reviews" }
);

const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports.Reviews = Reviews;

const servicesSchema = mongoose.Schema(
  {
    icon: {
      type: String,
      required: true,
    },
    imagePromo: {
      type: String,
      required: true,
    },
    imageBg: {
      type: String,
      required: true,
    },
    imagePreview: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "services" }
);

const Services = mongoose.model("Services", servicesSchema);
module.exports.Services = Services;

const advantagesSchema = mongoose.Schema(
  {
    icon: {
      type: String,
      required: true,
    },
    head: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { collection: "advantages" }
);

const Advantages = mongoose.model("Advantages", advantagesSchema);
module.exports.Advantages = Advantages;

const benefitsSchema = mongoose.Schema(
  {
    icon: {
      type: String,
      required: true,
    },
    head: {
      type: String,
      required: true,
    },
  },
  { collection: "benefits" }
);

const Benefits = mongoose.model("Benefits", benefitsSchema);
module.exports.Benefits = Benefits;
