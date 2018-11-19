const faker = require('faker')

// Associated Derby docs: https://derbyjs.com/docs/derby-0.10/components/structure#structure

// I'll use this component to demonstrate many of things you'd want to do with
// components. Let's get started:
class WholesomeComponent {

  // A component has several lifecycle methods that we want to hook into:
  // - init
  // - create
  // @see https://derbyjs.com/docs/derby-0.10/components/structure#controller-definition

  // Runs both on the server and the client. The DOM is not available when init
  // is called.
  init() {
    this.$cats = this.model.at('cats')
    this.$dogs = this.model.at('dogs')
  }

  // Called on the client when a component is loaded and ready in the DOM.
  create() {
  }

  _addCat() {
    this.$cats.push(faker.name.firstName())
  }

  _addDog() {
    // Rather than using a scoped Racer Model, we can also just push to the
    // correct path
    this.model.push('dogs', faker.name.firstName())
  }
}

WholesomeComponent.prototype.name = 'wholesome-component'
WholesomeComponent.prototype.view = __dirname

module.exports = WholesomeComponent
