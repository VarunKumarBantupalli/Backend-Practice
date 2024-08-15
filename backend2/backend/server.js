import express from 'express';
const app = express();

app.get('/' , (req,res)=>{
    res.send('server is ready');
});
const port = process.env.PORT || 5000 ;
app.get('/api/jokes' , (req,res)=>{
    const jokes = [
        {
            id:1,
            title:'first joke',
            content:'chimma and elephant'
        },
        {
            id:2,
            title:'second joke',
            content:'crocidile and monkey'
        },
        {
            id:3,
            title:'third joke',
            content:'rabbit and tortoise'
        },
        {
            id:4,
            title:'fourth joke',
            content:'tiger and cow'
        },
        {
            id:5,
            title:'five joke',
            content:'cheetah  joke'
        },
    ];
    res.send(jokes);
})

app.listen(port , ()=>{
    console.log(`serve at ${port}`);
    
})