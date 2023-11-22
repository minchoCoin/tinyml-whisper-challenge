const express = require('express');


const word = ['단어1','단어2','단어3','단어4','단어5','단어6','단어7','단어8','단어9','단어10','단어11','단어12','단어13','단어14','단어15'];
const video = ['video/치킨.avi','video/피칸.mp4','video/페퍼로니.mp4','video/부추.mp4','video/피치.mp4','video/박치.mp4','video/떡볶이.mp4','video/video8.mp4','video/video9.mp4','video/video10.mp4','video/video11.mp4','video/video12.mp4','video/video13.mp4','video/video14.mp4','video/video15.mp4'];
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.listen('3000',()=>{
    console.log('listen on 3000');
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});


app.post('/request/video',(req,res)=>{
    console.log("video link request");

    myvideolink="";
    let index = req.body.inferencedwordindex;

    myvideolink = video[index];
    res.send(JSON.stringify({videolink: myvideolink})); 
});

