const express = require("express");
const {
  getTeams,
  getTeam,
  getReviews,
  getReview,
  getServices,
  getService,
  getAdvantages,
  getBenefits
} = require("../controllers/planes");

const router = express.Router();

const path = require("path");

router.get("/advantages", getAdvantages);

router.get("/benefits", getBenefits);

router.get("/team", getTeams);

router.get("/team/:id", getTeam);

router.get("/reviews", getReviews);

router.get("/reviews/:id", getReview);

router.get("/services", getServices);

router.get("/services/:id", getService);

module.exports = router;
