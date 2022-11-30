
const fetch = require('node-fetch');
const express = require("express");
const { response } = require('express');
const app = express();

app.use(express.static("public"));

  app.get("/users/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const answer = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch("https://api.clickup.com/api/v2/user", init);
        
        return response.json();
      };
    const ok = await answer();
    res.json(ok);
  });

  app.get("/teams/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const answer = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch("https://api.clickup.com/api/v2/team", init);
        
        return response.json();
      };
    const ok = await answer();
    res.json(ok);
  });

  app.get("/spaces/:team_id/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const team_id = req.params.team_id;
    const answer = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch(`https://api.clickup.com/api/v2/team/${team_id}/space?archived=false`, init);
        
        return response.json();
      };
    const ok = await answer();
    res.json(ok);
  });

  app.get("/folder/:space_id/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const space_id = req.params.space_id;
    const answer = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch(`https://api.clickup.com/api/v2/space/${space_id}/folder?archived=false`, init);
        
        return response.json();
      };
    const ok = await answer();
    res.json(ok);
  });

  app.get("/list/:folder_id/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const folder_id = req.params.folder_id;
    const answer = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch(`https://api.clickup.com/api/v2/folder/${folder_id}/list?archived=false`, init);
        
        return response.json();
      };
    const ok = await answer();
    res.json(ok);
  });
  

  app.get("/task/:list_id/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const list_id = req.params.list_id;
    const answer = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch(`https://api.clickup.com/api/v2/list/${list_id}/task?archived=false`, init);
        
        return response.json();
      };
    const ok = await answer();
    res.json(ok);
  });
  
  app.get("/alltask/:team_id/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const team_id = req.params.team_id;
    const answer = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch(`https://api.clickup.com/api/v2/team/${team_id}/task`, init);
        
        return response.json();
      };
    const ok = await answer();
    res.json(ok);
  });

  app.get("/folderless/:space_id/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const space_id = req.params.space_id;
    const answer = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch(`https://api.clickup.com/api/v2/space/${space_id}/list`, init);
        
        return response.json();
      };
    const ok = await answer();
    res.json(ok);
  });

  app.get("/deleteTask/:task_id/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const task_id = req.params.task_id;
    const answer = async () => {
      
        const init = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
      
        const response = await fetch(`https://api.clickup.com/api/v2/task/${task_id}/`, init);
        
        return response;
      };
    const ok = await answer();
    res.json(ok);
  });
  

  app.get("/addtask/:accessToken/:list_id/:taskName", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
    )
    const accessToken = req.params.accessToken;
    const list_id = req.params.list_id;
    var arr = JSON.parse((req.query.assignees))
    Array.isArray(arr)
    const answer = async () => {

      var og_arr = [];
      Array.from(arr).forEach((arr1)=>{
        og_arr.push(arr1)
      });
      console.log(og_arr);
      Array.isArray(og_arr)
      const data = {
        "name": req.params.taskName,
        "description": req.query.description,
        "due_date": req.query.due_date,
        "priority": req.query.priority,
        "assignees": og_arr
      }
      console.log(data)
        const init = {
          method: "POST",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken},
          body: JSON.stringify(data)
        };
      
        const response = await fetch(`https://api.clickup.com/api/v2/list/${list_id}/task`, init);
        
        return response.json();
      };
    const ok = await answer();
    res.json({
      response: ok,
      statusCode: ok.status
    });
  });




  app.get("/listmembers/:list_id/:token", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Accept Authorization"
	)
    const accessToken = req.params.token;
    const list_id = req.params.list_id;
    const answer = async () => {
      
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" , "Authorization": accessToken}
        };
        const response = await fetch(`https://api.clickup.com/api/v2/list/${list_id}/member`, init);
        
        return response.json();
      };
    const ok = await answer();
    res.json(ok);
  });





  let port = process.env.PORT;
  if (port == null || port == ""){
	port = 80;
  }
  
  app.listen(port, () => {
	console.log("listening on port " + port);
  });
  
  
