que.Recipe = {
  ngController : function($scope, $element) {
    var t = que.Recipe;

    var DEFAULT_INGREDIENT = {
      name : ''
    };

    var INPUT_CLASS = 'ingredient-input';
    
    var INGREDIENT_SERVICE = 'http://' 
    
    var cache = [{
      name : 'milanesas'
    }];

    function suggestIngredients(term, suggest) {
      var ingredients = [];
      
      // Check the local cache first

      var foundInCache = false;
      for (var i = 0; i < cache.length; i++) {
        var ing = cache[i];
        if (ing.name.indexOf(term)) {
          ingredients.push(ing.name);
          foundInCache = true;
        }
      }
      
      if (!foundInCache) {
        
        // Send request to server
        
        $.get(INGREDIENT_SERVICE, data: {
          ingredient : term
        });
      
      }
      
      suggest(ingredients);
    }

    function setupIngredients() {
      $scope.ingredients = [];
      newIngredient();

      setTimeout(function() {
        $scope.$apply();

        $('.' + INPUT_CLASS).autocomplete({
          source : suggestIngredients
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
          source : suggestIngredients
        });
      }, 0);
    }

    $scope.newIngredient = function() {
      newIngredient();
    };
  }
}