

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-PbQkjDG78xjpjlgajr7Kb5tE",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors'); 

// async function apicall()
// {

// }

// apicall()

const app = express();
app.use(bodyParser.json())
app.use(cors());
app.post('/', async(req, res) => {
  const {message} = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    message:response.data.choices[0].text,
  })
     
  });
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  }); 
