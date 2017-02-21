angular.module("quoteList").controller("mainCtrl", function($scope,mainSrv){

  $scope.quotes = mainSrv.getQuotes();

  $scope.deleteMe = function(textToDelete){
  mainSrv.removeData(textToDelete);
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(mainSrv.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }
}

})
