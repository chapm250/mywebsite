/**
 * Created by josh on 1/29/16.
 */
var express=require('express'),
    port = process.env.PORT || 1338;
    app = express();

app.use(express.static(__dirname));
var files = ["videos/all.webm", "videos/and.webm", "videos/none.webm", "videos/about.webm", "videos/above.webm", "videos/algebra.webm"
    , "videos/almost.webm", "videos/as.webm", "videos/below.webm", "videos/both.webm", "videos/calculus.webm"
    , "videos/count.webm", "videos/decrease.webm", "videos/divide.webm", "videos/empty.webm", "videos/enough.webm", "videos/equal.webm"
    , "videos/fedup.webm", "videos/few.webm", "videos/figure.webm", "videos/full.webm", "videos/geometry.webm", "videos/half.webm"
    , "videos/heavy.webm", "videos/increase.webm", "videos/large.webm", "videos/light.webm", "videos/limit.webm", "videos/little.webm"
    , "videos/many.webm", "videos/math.webm", "videos/measure.webm", "videos/more.webm", "videos/most.webm", "videos/much.webm", "videos/none.webm"
    , "videos/overflow.webm", "videos/percent.webm", "videos/proportion.webm", "videos/small.webm", "videos/statistics.webm", "videos/subtract.webm"
    , "videos/than.webm", "videos/too.webm", "videos/total.webm", "videos/trigonometry.webm", "videos/very.webm", "videos/weigh.webm", "videos/wide.webm"
    , "videos/width.webm"];


var chapt2 = ["chapt2/above.webm", "chapt2/test2.webm", "chapt2/test3.webm"];

var currentChapter = files;

app.get('/switchVideo', function(req, res){
    res.send(currentChapter[Math.floor((Math.random() * currentChapter.length))]);
    console.log(currentChapter);
});

app.get('/changeChapters', function(req, res){
    var chapter = req.param('chapter');
    console.log(currentChapter);
    if (chapter == 'files') {
        currentChapter = files;
    } else {
        currentChapter = chapt2;
    }
    console.log(currentChapter.length);
    res.send(currentChapter[Math.floor((Math.random() * currentChapter.length))]);
});

app.listen(port);

