import chalk from "chalk";

export const exampleDataFix = async (req, res, knex, auditKnex) => {
  try {
    // Avoid using knex('tableName') directly, use .from() instead
    // This is to ensure it works with both MySQL and MSSQL
    const pages = await knex()
      .select("*")
      .from("PAGE")
      .orderBy("PAGE_ID", "desc")
      .limit(25);

    // Logging page names
    for (const page of pages) {
      console.log(
        chalk.yellow(`Page ID: ${page.PAGE_ID}, Name: ${page.PAGE_NAME}`)
      );
    }

    console.log("Script ran successfully! ✅✅✅");
    res.status(200).json({ message: "Script ran successfully! ✅✅✅" });
  } catch (e) {
    console.error("Error updating sequence table:", e);
    res.status(500).json({
      message: "Failed to update sequence table",
      error: e.message || e,
    });
  }
};
