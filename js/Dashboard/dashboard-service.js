(function () {
  'use strict';

  function NodeService() {

    const self = this;

    self.getRandomizedY = () => {
      const min = 1;
      const max = 900;
      return Math.floor(Math.random() * ( 1 + max - min )) + min;
    };

    self.getRandomizedX = () => {
      const min = 1;
      const max = 1500;
      return Math.floor(Math.random() * ( 1 + max - min )) + min;
    };

    return self;
  }

  angular
    .module('circles')
    .service('NodeService', NodeService);

  NodeService.$inject = ['$http'];
}());