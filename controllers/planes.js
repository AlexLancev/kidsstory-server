const {
  Team,
  Reviews,
  Services,
  Advantages,
  Benefits,
} = require("../modles/planes");

/**
 * @param {*} req
 * @param {*} res
 */
const getTeams = async (req, res) => {
  try {
    const planes = await Team.find();

    res.status(200).json(planes);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({
      message: "Не удалось получить список учителей, повторите попытку позднее",
    });
  }
};

/**
 * @param {*} req
 * @param {*} res
 */
const getReviews = async (req, res) => {
  try {
    const blog = await Reviews.find();

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({
      message: "Не удалось получить список отзывов, повторите попытку позднее",
    });
  }
};

/**
 * @param {*} req
 * @param {*} res
 */
const getServices = async (req, res) => {
  try {
    const blog = await Services.find();

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({
      message: "Не удалось получить список блогов, повторите попытку позднее",
    });
  }
};

/**
 * @param {*} req
 * @param {*} res
 */
const getAdvantages = async (req, res) => {
  try {
    const advantages = await Advantages.find();

    res.status(200).json(advantages);
  } catch (error) {
    console.error("Error fetching advantages:", error);
    res.status(500).json({
      message: "Не удалось получить список услуг, повторите попытку позднее",
    });
  }
};

/**
 * @param {*} req
 * @param {*} res
 */
const getBenefits = async (req, res) => {
  try {
    const benefits = await Benefits.find();

    res.status(200).json(benefits);
  } catch (error) {
    console.error("Error fetching benefits:", error);
    res.status(500).json({
      message:
        "Не удалось получить список преимуществ, повторите попытку позднее",
    });
  }
};

/**
 * @param {*} req
 * @param {*} res
 */
const getTeam = async (req, res) => {
  try {
    const plane = await Team.find({ _id: req.params.id });

    res.status(200).json(plane);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(404).json({ message: "Учитель не найден" });
  }
};

/**
 * @param {*} req
 * @param {*} res
 */
const getReview = async (req, res) => {
  try {
    const plane = await Reviews.find({ _id: req.params.id });

    res.status(200).json(plane);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(404).json({ message: "Отзыв не найден" });
  }
};

/**
 * @param {*} req
 * @param {*} res
 */
const getService = async (req, res) => {
  try {
    const plane = await Services.find({ _id: req.params.id });

    res.status(200).json(plane);
  } catch (error) {
    console.error("Error fetching tour:", error);
    res.status(404).json({ message: "Услуга не найдена" });
  }
};

module.exports = {
  getTeams,
  getTeam,
  getReviews,
  getReview,
  getServices,
  getService,
  getAdvantages,
  getBenefits,
};
