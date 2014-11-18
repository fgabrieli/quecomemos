que.Recipe = {
  ngController : function($scope, $element) {
    var DEFAULT_INGREDIENT = {
      name : ''
    };

    // XXX: delete me when backend is ready
    $scope.suggestedIngredients = [ {
      name : 'sal'
    }, {
      name : 'lechuga'
    }, {
      name : 'zanahoria'
    } ];

    $scope.hasSuggestedIng = false;

    setupIngredients();

    function setupIngredients() {
      $scope.ingredients = [];
      newIngredient();
    }

    function newIngredient() {
      $scope.ingredients.push($.extend({}, DEFAULT_INGREDIENT));

      setTimeout(function() {
        $scope.$apply();
      }, 0);
    }

    $scope.newIngredient = function() {
      newIngredient();
    };
    
    $scope.suggestIngredients = function(ingredient) {
      console.log(ingredient.name);
      $scope.hasSuggestedIng = true;
      
      // Set the position for the box

      console.log(this);
    }
  }
}