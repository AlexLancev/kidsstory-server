const { Team, Reviews, Services } = require("../modles/planes");

/**
 * @param {*} req
 * @param {*} res
 */
const getTeams = async (req, res) => {
  try {
    const planes = await Team.find();

    res.status(200).json(planes);
  } catch (error) {
    console.error("Error fetching tours:", error);
    res
      .status(500)
      .json({
        message:
          "Не удалось получить список экскурсий, повторите попытку позднее",
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
    console.error("Error fetching blogs:", error);
    res
      .status(500)
      .json({
        message: "Не удалось получить список блогов, повторите попытку позднее",
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
    res
      .status(500)
      .json({
        message: "Не удалось получить список блогов, повторите попытку позднее",
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
    console.error("Error fetching tour:", error);
    res.status(404).json({ message: "Тур не найден" });
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
    console.error("Error fetching tour:", error);
    res.status(404).json({ message: "Тур не найден" });
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
    res.status(404).json({ message: "Тур не найден" });
  }
};

module.exports = {
  getTeams,
  getTeam,
  getReviews,
  getReview,
  getServices,
  getService,
};
