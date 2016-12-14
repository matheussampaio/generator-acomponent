const _ = require('lodash')
const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments)

        this.argument('componentName', {
            type: String,
            required: true
        })

        // transform to my-component-name
        this.componentKebabCaseName = _.kebabCase(this.componentName)

        // transform to myComponentName
        this.componentCamelCaseName = _.camelCase(this.componentName)

        // transform to MyComponentName
        this.componentCamelCapitalizeCaseName = _.capitalize(this.componentCamelCaseName)
    },


    prompting: function () {
        return this.prompt({
            type: 'input',
            name: 'moduleName',
            message: 'Module name?',
            store: true
        })
        .then(answers => {
            this.moduleName = answers.moduleName
        })
    },


    writing: function () {
        this._createFile('index.component.js', `${this.componentKebabCaseName}/${this.componentKebabCaseName}.component.js`)
        this._createFile('index.scss', `${this.componentKebabCaseName}/${this.componentKebabCaseName}.scss`)
        this._createFile('index.html', `${this.componentKebabCaseName}/${this.componentKebabCaseName}.html`)
    },


    _createFile: function(templatePath, outputDestinationFolder) {
        this.fs.copyTpl(
            this.templatePath(templatePath),
            this.destinationPath(outputDestinationFolder),
            {
                moduleName: this.moduleName,
                componentKebabCaseName: this.componentKebabCaseName,
                componentCamelCaseName: this.componentCamelCaseName,
                componentCamelCapitalizeCaseName: this.componentCamelCapitalizeCaseName
            }
        )
    }
})
