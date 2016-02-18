/**
 * Created by josh on 1/29/16.
 */



var express=require('express'),
    app = express(),
    port = process.env.PORT || 1338,
    async = require('async');




app.use(express.static(__dirname));

var Quantity = ["Quantity/and.webm", "Quantity/none.webm", "Quantity/about.webm", "Quantity/above.webm", "Quantity/algebra.webm"
    , "Quantity/almost.webm", "Quantity/as.webm", "Quantity/below.webm", "Quantity/both.webm", "Quantity/calculus.webm"
    , "Quantity/count.webm", "Quantity/decrease.webm", "Quantity/divide.webm", "Quantity/empty.webm", "Quantity/enough.webm", "Quantity/equal.webm"
    , "Quantity/fedup.webm", "Quantity/few.webm", "Quantity/figure.webm", "Quantity/full.webm", "Quantity/geometry.webm", "Quantity/half.webm"
    , "Quantity/heavy.webm", "Quantity/increase.webm", "Quantity/large.webm", "Quantity/light.webm", "Quantity/limit.webm", "Quantity/little.webm"
    , "Quantity/many.webm", "Quantity/math.webm", "Quantity/measure.webm", "Quantity/more.webm", "Quantity/most.webm", "Quantity/much.webm", "Quantity/none.webm"
    , "Quantity/overflow.webm", "Quantity/percent.webm", "Quantity/proportion.webm", "Quantity/small.webm", "Quantity/statistics.webm", "Quantity/subtract.webm"
    , "Quantity/than.webm", "Quantity/too.webm", "Quantity/total.webm", "Quantity/trigonometry.webm", "Quantity/very.webm", "Quantity/weigh.webm", "Quantity/wide.webm"
    , "Quantity/width.webm"];

var Communication = ['CommunicationAndGovernment/movie.webm', 'CommunicationAndGovernment/recordplayer.webm', 'CommunicationAndGovernment/discuss.webm', 'CommunicationAndGovernment/law.webm', 'CommunicationAndGovernment/thank.webm', 'CommunicationAndGovernment/.writeName.py.swp', 'CommunicationAndGovernment/signs.webm', 'CommunicationAndGovernment/scold.webm', 'CommunicationAndGovernment/story.webm', 'CommunicationAndGovernment/letter.webm', 'CommunicationAndGovernment/politics.webm', 'CommunicationAndGovernment/exaggerate.webm', 'CommunicationAndGovernment/legislature.webm', 'CommunicationAndGovernment/testament.webm', 'CommunicationAndGovernment/commandment.webm', 'CommunicationAndGovernment/explain.webm', 'CommunicationAndGovernment/mock.webm', 'CommunicationAndGovernment/announce.webm', 'CommunicationAndGovernment/communicate.webm', 'CommunicationAndGovernment/magazine.webm', 'CommunicationAndGovernment/correspondence.webm', 'CommunicationAndGovernment/email.webm', 'CommunicationAndGovernment/command.webm', 'CommunicationAndGovernment/interpret.webm', 'CommunicationAndGovernment/principles.webm', 'CommunicationAndGovernment/second.webm', 'CommunicationAndGovernment/scream.webm', 'CommunicationAndGovernment/vow.webm', 'CommunicationAndGovernment/insult.webm', 'CommunicationAndGovernment/phone.webm', 'CommunicationAndGovernment/government.webm', 'CommunicationAndGovernment/listen.webm', 'CommunicationAndGovernment/television.webm', 'CommunicationAndGovernment/whisper.webm', 'CommunicationAndGovernment/show.webm', 'CommunicationAndGovernment/member.webm', 'CommunicationAndGovernment/interview.webm', 'CommunicationAndGovernment/promise.webm', 'CommunicationAndGovernment/federal.webm', 'CommunicationAndGovernment/congress.webm', 'CommunicationAndGovernment/advertise.webm', 'CommunicationAndGovernment/speak.webm', 'CommunicationAndGovernment/judge.webm', 'CommunicationAndGovernment/bawlout.webm', 'CommunicationAndGovernment/reveal.webm', 'CommunicationAndGovernment/book.webm', 'CommunicationAndGovernment/will.webm', 'CommunicationAndGovernment/conversation.webm', 'CommunicationAndGovernment/sentence.webm', 'CommunicationAndGovernment/writeName.py', 'CommunicationAndGovernment/totalcommunication.webm', 'CommunicationAndGovernment/expression.webm', 'CommunicationAndGovernment/translate.webm', 'CommunicationAndGovernment/fingerspelling.webm', 'CommunicationAndGovernment/taperecording.webm', 'CommunicationAndGovernment/dialogue.webm', 'CommunicationAndGovernment/board.webm', 'CommunicationAndGovernment/quarrel.webm', 'CommunicationAndGovernment/gossip.webm', 'CommunicationAndGovernment/newspaper.webm', 'CommunicationAndGovernment/rules.webm', 'CommunicationAndGovernment/seal.webm', 'CommunicationAndGovernment/senate.webm', 'CommunicationAndGovernment/vote.webm', 'CommunicationAndGovernment/debate.webm', 'CommunicationAndGovernment/radio.webm', 'CommunicationAndGovernment/voice.webm']
var Education = ['Education/chapter.webm', 'Education/school.webm', 'Education/college.webm', 'Education/vocabulary.webm', 'Education/psychology.webm', 'Education/training.webm', 'Education/profession.webm', 'Education/diploma.webm', 'Education/experiment.webm', 'Education/language.webm', 'Education/firstyeargradstudent.webm', 'Education/audiology.webm', 'Education/learn.webm', 'Education/certifiicate.webm', 'Education/examination.webm', 'Education/student.webm', 'Education/program.webm', 'Education/process.webm', 'Education/teach.webm', 'Education/license.webm', 'Education/project.webm', 'Education/word.webm', 'Education/lesson.webm', 'Education/idiom.webm', 'Education/library.webm', 'Education/write.webm', 'Education/poetry.webm', 'Education/line.webm', 'Education/certify.webm', 'Education/graduate.webm', 'Education/sing.webm', 'Education/study.webm', 'Education/education.webm', 'Education/institution.webm', 'Education/practice.webm', 'Education/chemistry.webm', 'Education/paragraph.webm', 'Education/minor.webm', 'Education/workshop.webm', 'Education/quote.webm', 'Education/rhythm.webm', 'Education/history.webm', 'Education/dictionary.webm', 'Education/grammar.webm', 'Education/art.webm', 'Education/biology.webm', 'Education/drama.webm', 'Education/curriculum.webm', 'Education/read.webm', 'Education/major.webm', 'Education/course.webm', 'Education/schedule.webm', 'Education/science.webm']

var All = [Quantity, Communication, Education];

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://felixchapman.me');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    next();
});

var currentChapter = All;
//for the button RandomSign
app.get('/switchVideo', function(req, res){
    if(currentChapter == All) {
        var randomChapterChoice = All[Math.floor((Math.random() * All.length))];
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
        res.send(randomChapterChoice[Math.floor((Math.random() * randomChapterChoice.length))]);
    } else {
        res.send(currentChapter[Math.floor((Math.random() * eval(currentChapter).length))]);
    }
});

////////////////////////////////////////////start of Pizza api//////////////////////////////////

app.get("/login",function(req,res){
    var username = req.param('username');
    var password = req.param('password');
    var sql = 'select * from pizza.pizzausers where name = "' + username + '"and password = "' + password + '"';
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("We have an error:");
            console.log(err);
        } else {
            if(rows.length != 0) {
                currentUser=username;
                res.send(username);
            }
        }
    })});

app.get("/getToppings", function(req, res){
    var sql = 'select property, type, false as selected from pizza.10in'
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("we have and error:");
            console.log(err);
        } else {
            res.send(rows);
        }
    })
});

app.get("/checkOut", function(req, res){
    var sql = 'truncate pizza.shoppingcartbase'
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("checkOut sucks");
            console.log(err)
        } else {
            res.send(err)
        }
    })
});

app.get("/getSauce", function(req, res){
    var sql = 'select saucename from pizza.sauces'
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("we have and error:");
            console.log(err);
        } else {
            res.send(rows);
        }
    })
});

app.get("/getDrank", function(req, res){
    var sql = 'select property from pizza.Drinks'
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("we have and error:");
            console.log(err);
        } else {
            res.send(rows);
        }
    })
});

app.get("/getPizzas", function(req, res){
    var sql = 'select * from pizza.shoppingcartbase where pizzaID!=0'
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("we have and error:");
            console.log(err);
        } else {
            res.send(rows);
        }
    })
});

app.get("/getCart", function(req, res){
    var tablename = req.param('tablename')
    var sql = 'select * from pizza.shoppingcartbase left join pizza.' + tablename+ ' on pizza.'+ tablename + '.property = pizza.shoppingcartbase.itemname '
    connection.query(sql, function(err, rows, fields){
        console.log(sql)
        if(err){console.log("we have and error:");
            console.log(err);
        } else {
            res.send(rows);
        }
    })

});

app.get("/addToCart", function(req, res){
    var itemname = req.param('itemname');
    var itemtype = req.param('itemtype');
    var pizzaID = req.param('pizzaID');
    var exists = false;
    async.series([
        function(callback){
            var sql = 'select * from pizza.shoppingcartbase where itemname ="' + itemname+'"';
            connection.query(sql, function(err, rows, fields){
                if(err){console.log("we have an error:");
                    console.log("inselect" + sql);
                } else {
                    if(rows.length != 0){
                        exists = true;
                    }
                }
                callback();
            })
        },
        function (callback){
            if(exists && (pizzaID==0)){
                var sql = 'update pizza.shoppingcartbase set quantity = quantity + 1 where itemname = "' + itemname +'"';
            } else {
                var sql = 'insert into pizza.shoppingcartbase (itemname, quantity, pizzaID, type) values ("' + itemname + '", 1, '+  pizzaID +  ', "'+ itemtype+'")';
            }
            connection.query(sql, function(err, rows, fields){
                if(err){console.log("we have an error:");
                    console.log("in update" + sql);
                } else {
                    res.send(err)
                }
            })
        }
    ])
})

app.get("/deleteItem", function(req, res){
    var itemname = req.param('itemname');
    var pizzaID = req.param('pizzaID')
    if(pizzaID > 0){
        var sql = 'delete from pizza.shoppingcartbase where pizzaID = ' + pizzaID;
    } else {
        var sql = 'delete from pizza.shoppingcartbase where itemname = "' + itemname + '"'
    }
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("delete sucks");
        } else {
            res.send(err)
        }
    })
});

app.get("/getSide", function(req, res){
    var sql = 'select property from pizza.sides'
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("we have and error:");
            console.log(err);
        } else {
            res.send(rows);
        }
    })
});

app.get("/getPrice", function(req, res){
    var itemname = req.param('itemname');
    var tablename = req.param('tablename');

    var sql = 'select Dominos, PizzaHut, PapaJohns, Caseys, HungryHowies, PizzaRanch from pizza.'+ tablename+' where property = "' + itemname + '"';
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("fucking error:");
            console.log(err)
        } else {
            res.send(rows[0])
        }
    })
})

app.get("/logout", function(req, res){
    var sql = 'truncate pizza.shoppingcartbase'
    connection.query(sql, function(err, rows, fields){
        if(err){console.log("fuck logout");
            console.log(err)
        } else {
            res.send(err)
        }
    })
})


app.get("/register",function(req,res){
    var username = req.param('name');
    var password = req.param('password');
    var email = req.param('mail');
    var address = req.param('address');
    var phone = req.param('phone');
    var card = req.param('card');


    async.series([
        function(callback){
            var sql = 'select user from pizza.pizzausers where name=' + username;
            connection.query(sql, function(err,rows,fields){
                if(err){console.log("we have and error:");
                    console.log(err);
                } else {
                    if (rows.length != 0){
                        return;
                    }
                }

            })
        }


    ]);

    var sql = 'insert into pizza.pizzausers values ("' + username + '", "' + email + '", "' + password + '", "' +
        address + '", "' + phone + '", "' + card + '")';
    connection.query(sql,  function(err, rows, fields){
        if(err){console.log("We have an error:");
            console.log(err);
        } else {
            console.log(rows);
            res.send(err);
        }
    })


});

app.get("/click",function(req,res){
    var id = req.param('id');
    var sql = 'YOUR SQL HERE'
    console.log("Attempting sql ->"+sql+"<-");

    connection.query(sql,(function(res){return function(err,rows,fields){
        if(err){console.log("We have an insertion error:");
            console.log(err);}
        res.send(err); // Let the upstream guy know how it went
    }})(res));
});

app.listen(port);


