const express = require("express");
const router = express.Router();
const knex = require("../db/client");
const app = express();


// app.get("/new", (req, res) => {
//     res.render("cohorts/new");
// });

// app.post("/", (req, res) => {
//     const { cohort_name, logo_url, cohort_members} = req.body;
  
//     knex("cohorts")
//       .insert({
//         cohort_name,
//         logo_url,
//         cohort_members
        
//       })
//       .returning("id")
//       .then(([id]) => {
//         res.redirect(`/`);
//       });
//   });

// router.get("/", (req, res) => {
//     knex("cohorts")
//       .orderBy("id", "desc")
//       .then(cohorts => {
//         res.render("cohorts/cohortsIndex", { cohorts });
//       });
//   });

// router.get("/cohortsIndex", (request, response) => {
//     response.render("cohorts/cohortsIndex")
// }) 
  
//   // Posts#show -> Get /posts/:id
// router.get("/:id", (req, res) => {
//     const { id } = req.params;
//     knex("cohorts")
//       .where("id", id)
//       .first()
//       .then(cohort => {
//         res.render("cohorts/individual", { cohort });
//       });
//   });

  // Posts#destroy -> DELETE /posts/:id
  // router.delete("/:id", (req, res) => {
  //   const { id } = req.params;
  
  //   knex("cohorts")
  //     .where("id", id)
  //     .del()
  //     .then(() => {
  //       res.redirect("/cohorts");
  //     });
  // });

module.exports = router;