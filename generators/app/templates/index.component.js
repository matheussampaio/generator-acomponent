class <%= componentCamelCapitalizeCaseName %>Controller {
    /* @ngInject */
    constructor() {

    }
}

angular
    .module('<%= moduleName %>')
    .component('<%= componentCamelCaseName %>', {
        controller: <%= componentCamelCapitalizeCaseName %>Controller,
        template: '<%= componentKebabCaseName %>/<%= componentKebabCaseName %>.html'
    });
