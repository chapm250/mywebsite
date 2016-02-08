/**
 * Created by josh on 1/29/16.
 */
var express=require('express'),
    port = process.env.PORT || 1338;
app = express();

app.use(express.static(__dirname));



var Quantity = ["Quantity/All.webm", "Quantity/and.webm", "Quantity/none.webm", "Quantity/about.webm", "Quantity/above.webm", "Quantity/algebra.webm"
    , "Quantity/almost.webm", "Quantity/as.webm", "Quantity/below.webm", "Quantity/both.webm", "Quantity/calculus.webm"
    , "Quantity/count.webm", "Quantity/decrease.webm", "Quantity/divide.webm", "Quantity/empty.webm", "Quantity/enough.webm", "Quantity/equal.webm"
    , "Quantity/fedup.webm", "Quantity/few.webm", "Quantity/figure.webm", "Quantity/full.webm", "Quantity/geometry.webm", "Quantity/half.webm"
    , "Quantity/heavy.webm", "Quantity/increase.webm", "Quantity/large.webm", "Quantity/light.webm", "Quantity/limit.webm", "Quantity/little.webm"
    , "Quantity/many.webm", "Quantity/math.webm", "Quantity/measure.webm", "Quantity/more.webm", "Quantity/most.webm", "Quantity/much.webm", "Quantity/none.webm"
    , "Quantity/overflow.webm", "Quantity/percent.webm", "Quantity/proportion.webm", "Quantity/small.webm", "Quantity/statistics.webm", "Quantity/subtract.webm"
    , "Quantity/than.webm", "Quantity/too.webm", "Quantity/total.webm", "Quantity/trigonometry.webm", "Quantity/very.webm", "Quantity/weigh.webm", "Quantity/wide.webm"
    , "Quantity/width.webm"];

var Communication = ['CommunicationAndGovernment/movie.webm', 'CommunicationAndGovernment/recordplayer.webm', 'CommunicationAndGovernment/discuss.webm', 'CommunicationAndGovernment/test.txt', 'CommunicationAndGovernment/law.webm', 'CommunicationAndGovernment/thank.webm', 'CommunicationAndGovernment/.writeName.py.swp', 'CommunicationAndGovernment/signs.webm', 'CommunicationAndGovernment/scold.webm', 'CommunicationAndGovernment/story.webm', 'CommunicationAndGovernment/letter.webm', 'CommunicationAndGovernment/politics.webm', 'CommunicationAndGovernment/exaggerate.webm', 'CommunicationAndGovernment/legislature.webm', 'CommunicationAndGovernment/testament.webm', 'CommunicationAndGovernment/commandment.webm', 'CommunicationAndGovernment/explain.webm', 'CommunicationAndGovernment/mock.webm', 'CommunicationAndGovernment/announce.webm', 'CommunicationAndGovernment/communicate.webm', 'CommunicationAndGovernment/magazine.webm', 'CommunicationAndGovernment/correspondence.webm', 'CommunicationAndGovernment/email.webm', 'CommunicationAndGovernment/command.webm', 'CommunicationAndGovernment/interpret.webm', 'CommunicationAndGovernment/principles.webm', 'CommunicationAndGovernment/second.webm', 'CommunicationAndGovernment/scream.webm', 'CommunicationAndGovernment/vow.webm', 'CommunicationAndGovernment/insult.webm', 'CommunicationAndGovernment/phone.webm', 'CommunicationAndGovernment/government.webm', 'CommunicationAndGovernment/listen.webm', 'CommunicationAndGovernment/television.webm', 'CommunicationAndGovernment/whisper.webm', 'CommunicationAndGovernment/show.webm', 'CommunicationAndGovernment/member.webm', 'CommunicationAndGovernment/interview.webm', 'CommunicationAndGovernment/promise.webm', 'CommunicationAndGovernment/federal.webm', 'CommunicationAndGovernment/congress.webm', 'CommunicationAndGovernment/advertise.webm', 'CommunicationAndGovernment/speak.webm', 'CommunicationAndGovernment/judge.webm', 'CommunicationAndGovernment/bawlout.webm', 'CommunicationAndGovernment/reveal.webm', 'CommunicationAndGovernment/book.webm', 'CommunicationAndGovernment/will.webm', 'CommunicationAndGovernment/conversation.webm', 'CommunicationAndGovernment/sentence.webm', 'CommunicationAndGovernment/writeName.py', 'CommunicationAndGovernment/totalcommunication.webm', 'CommunicationAndGovernment/expression.webm', 'CommunicationAndGovernment/translate.webm', 'CommunicationAndGovernment/fingerspelling.webm', 'CommunicationAndGovernment/taperecording.webm', 'CommunicationAndGovernment/dialogue.webm', 'CommunicationAndGovernment/board.webm', 'CommunicationAndGovernment/quarrel.webm', 'CommunicationAndGovernment/gossip.webm', 'CommunicationAndGovernment/newspaper.webm', 'CommunicationAndGovernment/rules.webm', 'CommunicationAndGovernment/seal.webm', 'CommunicationAndGovernment/senate.webm', 'CommunicationAndGovernment/vote.webm', 'CommunicationAndGovernment/debate.webm', 'CommunicationAndGovernment/radio.webm', 'CommunicationAndGovernment/voice.webm']
var All = [Quantity, Communication];

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://felixchapman.me');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var currentChapter = All;
//for the button RandomSign
app.get('/switchVideo', function(req, res){
    if(currentChapter == All) {
        var randomChapterChoice = All[Math.floor((Math.random() * All.length))];
        console.log(randomChapterChoice);
        res.send(randomChapterChoice[Math.floor((Math.random() * randomChapterChoice.length))]);
    } else {
        res.send(currentChapter[Math.floor((Math.random() * eval(currentChapter).length))]);
    }
});

//For a chapter button
app.get('/changeChapters', function(req, res){
    var chapter = req.param('chapter');
    currentChapter = eval(chapter);
    if(currentChapter == All) {
        var randomChapterChoice = All[Math.floor((Math.random() * All.length))];
        console.log(randomChapterChoice);
        res.send(randomChapterChoice[Math.floor((Math.random() * randomChapterChoice.length))]);
    } else {
        res.send(currentChapter[Math.floor((Math.random() * eval(currentChapter).length))]);
    }
});

app.listen(port);

