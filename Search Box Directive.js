'use strict';

angular.module('xxxxxxx')
  .directive('searchBox', [SearchBoxDirective]);

function SearchBoxDirective () {
  var object = {
    restrict: 'E',
    template: require('./searchBox.html'),
    link: function searchBox (_scope, _element, _attrs) {
      let timeout;
      angular.element('.search-trigger').on('click', function () {
        angular.element('.input-box').focus();
      });
      angular.element('.input-box').on('focus',function(){
        expander(true);
      }).on('blur',function(){
        expander();
      });

      function expander(clicked){
        if (timeout) clearTimeout(timeout);
        if(clicked){
          angular.element('.search-box-sm').addClass('expanded');
        } else {
          timeout = setTimeout(function(){
            angular.element('.search-box-sm').removeClass('expanded');
          }, 250);

        }
      }
    }
  };
  return object;
}