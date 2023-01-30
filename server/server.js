require("dotenv").config();
const express = require("express");
const db = require("./db/index");

const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("select * from restaurants");
        return res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        })
    } catch (err) {
        console.log(err);
    }
});

app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("select * from restaurants where id = $1", [req.params.id]);
        return res.status(200).json({
            status: "success",
            results: results.rows[0]
        })
    } catch (err) {
        console.log(err)
    }
});

app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const { name, location, price_range } = req.body;
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) values($1, $2, $3)", [name, location, price_range]);
        return res.status(200).json({
            status: "success"
        })
    } catch (err) {
        console.log(err);
    }
});

app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const { name, location, price_range } = req.body;
        const { id } = req.params;
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *", [name, location, price_range, id]);
        return res.status(200).json({
            status: "success",
            results: results.rows[0]
        })
    } catch (err) {
        console.log(err)
    }
});

app.delete("/api/v1/restautants/:id", async (req, res) => {
    try {
        const { id } = req.params
        const results = db.query("DELETE FROM restaurants where id = $1", [id]);
        return res.status(200).json({
            status: "Deleted"
        })
    } catch (err) {
        console.log(err);
    }
    return res.status(204).json({
        status: "success"
    })
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});