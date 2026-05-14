import express from "express";


const app = express();
const port = 3000;




app.get("/", (req, res) => {
    
    const day = new Date("May 4, 2024 11:13:00").getDay();
    let dayOfTheWeek = ''
    if (day == 0 || day == 6) {
        dayOfTheWeek = "weekend, it's time to rest!";
    }
    else {
         dayOfTheWeek = "weekday, it's time to work hard!";
    }
    res.render("index.ejs", { dayOfTheWeek : dayOfTheWeek });

});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});``