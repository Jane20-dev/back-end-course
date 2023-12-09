import  express, { request, response }  from "express";
import mongoose from "mongoose";
import Post from "./Post.js";

const PORT = 5001;
const DB_URL = 'mongodb+srv://user:user@cluster0.qqdabk9.mongodb.net/?retryWrites=true&w=majority'

const app = express();

app.use(express.json())

app.get('/', (request, response) => {
    console.log(request.query);

    response.status(200).json('Сервер рабоатет')
    
})

app.post('/', async (request, response) => {
    try {
        // take from postman
        const {author, title, content, picture} = request.body

        // apply to DB
        const post = await Post.create({author, title, content, picture})
        response.status(200);
        
    } catch (error) {
        console.log(error);
    }

    // Take from postman
    


    
})

async function startApp(){
    try {
       await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Server was Runing on port ' + PORT));
    } catch (error) {
        console.log(error);
    }

}

startApp()



