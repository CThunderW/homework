
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts", t => {
      t.increments("id");
      t.string("cohort_name");
      t.string("logo_url");
      t.text("cohort_members");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cohorts");
};


