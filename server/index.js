const app = require('./src/app');
const PORT = 3000;

app.get('/',(req,res)=>{
   res.send("hi this a fitness and wellness content management system");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});