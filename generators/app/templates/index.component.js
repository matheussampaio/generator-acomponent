class <%= componentCamelCapitalizeCaseName %>Controller {
    /* @ngInject */
    constructor() {

    }
}

angular
    .module('<%= moduleName %>')
    .component('<%= componentCamelCaseName %>', {
        controller: <%= componentCamelCapitalizeCaseName %>Controller,
        templateUrl: '<%= componentKebabCaseName %>/<%= componentKebabCaseName %>.html'
    });
