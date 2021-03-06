myApp.controller("InputController", ['$scope', '$http', '$uibModal', '$uibModalInstance', 'DataFactory', function ($scope, $http, $uibModal, $uibModalInstance, DataFactory) {

  $scope.dataFactory = DataFactory;

  $scope.states = ["MN", "IA", "ND", "SD", "WI", "MB", "ON"];
  $scope.selectedOption = $scope.states[0];

  $scope.cancelForm = function () {
    console.log('cancelForm');
    $scope.dataFactory.removeDrawing();
    $uibModalInstance.dismiss();
  };

  // Saving new input from form and geometry
  $scope.saveComment = function() {
      // var comment = $scope.comment;
      var newComment = {
          comment: $scope.comment,
          firstname: $scope.first_name,
          lastname: $scope.last_name,
          street: $scope.address,
          city: $scope.city,
          state: $scope.state,
          zip: $scope.zip,
          phone: $scope.phone,
          email: $scope.email,
          list: $scope.list
      };
      $scope.dataFactory.saveNewComment(newComment);

      // var test = $scope.dataFactory.getDrawnItem();

      // close modal window
      $uibModalInstance.close();
      openThankYou();
      /// run factory function that will remove drawnItems layer from map and reset it


  }

  var openThankYou = function () {
    $uibModal.open({
    templateUrl: '/views/partials/thankyou.html',
    controller: 'ThanksController'
    });
  }


}]);
