import angular from 'angular';

import httpService from './httpService';
import storageService from './storageService';

export default angular.module('app.services', [])
    .service(...httpService)
    .service(...storageService)
    .name;
