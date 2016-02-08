/**
 * Created by josh on 1/29/16.
 */

//angular.module('app')
//    .controller("MainController", function(){
//    var vm = this;
//
//    vm.video = 'videos/test1.webm';
//});

angular.module('buttons',[])
    .controller('buttonCtrl',ButtonCtrl)
    .factory('buttonApi',buttonApi)
    .constant('apiUrl','http://localhost:1338');


function ButtonCtrl($scope, buttonApi){
    $scope.video = 'All/and.webm';
    $scope.switchVideo = switchVideo;
    $scope.checkAnswer = checkAnswer;
    $scope.answer = 'remember no upper case & all one word';
    $scope.correctAnswer = '';
    $scope.giveUp = giveUp;
    $scope.changeChapters = changeChapters;
    $scope.currentChapter = 'All';

    //function switchVideo() {
    //    $scope.video = 'videos/test3.webm';
    //
    //}

    function switchVideo() {
        buttonApi.switchVideo($scope.currentChapter)
            .success(function(data){
                $scope.video = data;
                $scope.correctAnswer = '';
                $scope.answer = 'remember no upper case & all one word'
            })
            .error(function() {
                console.log("fuck");
            })
    }
    function checkAnswer(guess) {
        var findAnswer = new RegExp(".*\/([a-z]*)\.*")
        var newGuess = $scope.video.match(findAnswer);
        if(guess == newGuess[1]){
            $scope.answer = 'Correct!!!!';
        } else {
            console.log('the guess was ' + guess);
            console.log('the answer was ' + newGuess[1]);
            $scope.answer = 'Wrong'

        }

    }

    function changeChapters(chapter) {
        buttonApi.changeChapters(chapter)
            .success(function(data){
            $scope.video = data;
                $scope.currentChapter = chapter;
            })
    }
    function giveUp() {
        var findAnswer = new RegExp(".*\/([a-z]*)\.*");
        var newGuess = $scope.video.match(findAnswer);
        $scope.correctAnswer = 'Dont be a quitter the answer is... ' + newGuess[1];
    }
}

function buttonApi($http,apiUrl){
    return {
        switchVideo: function(chapter) {
            var url = apiUrl + '/switchVideo?chapter=' + chapter;
            return $http.get(url);
        },
        changeChapters: function(chapter) {
            var url = apiUrl + '/changeChapters?chapter=' + chapter;
            return $http.get(url);
        }
    };
}
