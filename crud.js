const express = require('express');
const app = express();

const userModel = require("./usemodel");


app.get("/", (req, res) => {
    res.send("Welcome  Mongodb in backend");
})

app.get("/create", async (req, res) => {
    let createduser = await userModel.create({
        name: "Anand",
        username: "anandkr",
        email: "anand@gmail.com",
        age: 25
    })
    // console.log("mongodb practiceing")
    res.send(createduser);
})

// app.get("/create", async (req, res) => {
//     let createduser = await userModel.create({
//         name: "pramod",
//         username: "pramodkr",
//         email: "pramod@gmail.com",
//         age: 25
//     })
//     // console.log("mongodb practiceing")
//     res.send(createduser);
// })



// < ---------------------["for read all users "] -------------->
app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
})

// < ---------------------["for read only one users "] -------------->

// app.get("/read", async (req, res) => {

//         // { "find" gives us an empty array whether there is a user or not }
//         // let users = await userModel.find({ username: "anand" }); 

//         // "findOne" gives us null as we don't have any users}
//         // let users = await userModel.findOne({username: "anand"});

//         // {"findOne" gives us the object and if you have two people with the same users then "findOne" gives you the details of the first user }
//         let users = await userModel.find({ username: "anandkr" });
//         res.send(users);
//     })

// < --------------------- ["for update only one users "]-------------->

app.get("/update", async (req, res) => {
    //   userModel.findOneUpdate(findOne, update, {new: true})
    let updateduser = await userModel.findOneAndUpdate({ username: "pramodkr" }, { name: "surya kushwaha" }, { new: true })
    // console.log("mongodb practice");
    res.send(updateduser);
})

// < ---------------------["for delete all users "] -------------->
app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({ username: "anandkr" })
    res.send(users);
})



app.listen(3000);