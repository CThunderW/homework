const path = require("path");
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const app = express();
const knex = require("./db/client");
const teamCount = require("./teamCount");
const memberCount = require("./memberCount");

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//M E T H O D   O V E R R I D E
//used to make the delete function of forms work properly.
app.use(methodOverride((req, res) => {
    if (typeof req.body === "object" && req.body._method) {
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
})
);

// -----------
// R O U T E S

app.get("/", (req, res) => {
  knex("cohorts")
    .orderBy("id", "desc")
    .then(cohorts => {
      res.render("allView", { cohorts });
    });
});

app.get("/new", (req, res) => {
    res.render("cohorts/new");
});

app.get("/solo/:id", (req, res) => {
  const { id } = req.params;
  const {sortMethod, number} = req.query;
  knex("cohorts")
    .where("id", id)
    .first()
    .then(cohort => {
        const members = cohort.cohort_members.split(",");
        let finalTeams;
        if(sortMethod === "teamCount"){
            finalTeams = teamCount(members, number)
            // finalTeams = `Method: ${sortMethod} and ${members.length} students. Number: ${number}`
        } else if (sortMethod ==="memberCount"){
            finalTeams = memberCount(members, number)
            // finalTeams = `Method: ${sortMethod} and ${members.length} students. Number: ${number}`
        }
        res.render("cohorts/solo", { cohort, number, sortMethod, finalTeams});
    });
});

app.post("/newSolo", (req, res) => {
    const { cohort_name, logo_url, cohort_members} = req.body;
    
    knex("cohorts")
      .insert({
        cohort_name,
        logo_url,
        cohort_members
      })
      .returning("id")
      .then(([id]) => {
        res.redirect(`/solo/${id}`);
      });
  });

  app.get('/solo/:id/edit', (req, res) =>{
      const { id } = req.params;
      knex("cohorts").where("id", id).first().then(cohort => {
          res.render("cohorts/edit", {cohort})
      });
  })

  app.patch('/solo/:id', (req, res) => {
    const {id} = req.params;
    const {cohort_name, logo_url, cohort_members} = req.body;
    knex("cohorts").where('id', id).update({
        cohort_name,
        logo_url,
        cohort_members
    }).then(res.redirect(`/solo/${id}`));
  });

app.delete("/solo/:id", (req, res) => {
    const {id} = req.params;
    knex("cohorts").where("id", id)
    .del()
    .then(() => {
        res.redirect("/");
    });
});




  
const cohortsRouter = require("./routes/cohorts");
app.use("/cohorts", cohortsRouter);

// ------------------
// R U N  S E R V E R
// ------------------

const PORT = 1234;
const HOST = "localhost"; // 127.0.0.1
app.listen(PORT, HOST, () => {
  console.log(`ð» Server listening on http://${HOST}:${PORT}`);
});