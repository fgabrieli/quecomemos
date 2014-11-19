que.Recipe = {
  ngController : function($scope, $element) {
    var t = que.Recipe;

    var DEFAULT_INGREDIENT = {
      name : ''
    };
    
    var INPUT_CLASS = 'ingredient-input';

    function setupIngredients() {
      $scope.ingredients = [];
      newIngredient();
      
      setTimeout(function() {
        $scope.$apply();
        
        $('.' + INPUT_CLASS).autocomplete({
          source : [ 'test', 'test1', 'test2' ]
        });
      }, 0);
    }

    $(window).load(function() {
      setupIngredients();
    });

    // Last ingredient input id
    
    var lastInputId = 0;

    function getNewInputId() {
      return ++lastInputId;
    }

    function newIngredient() {
      var newId = getNewInputId();
      $scope.ingredients.push($.extend({
        id : newId
      }, DEFAULT_INGREDIENT));

      setTimeout(function() {
        $scope.$apply();
        
        $('#ingredient-' + newId).autocomplete({
          source : [ 'test', 'test1', 'test2' ]
        });
      }, 0);
    }

    $scope.newIngredient = function() {
      newIngredient();
    };
  }
}