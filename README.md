# Angular

- Angular is a JavaScript framework.
- Create reactive Single Page Applications.
- MVC framework.
- Maintainability, Productivity, Consistency

### 1.ngModule

- It is a deacter.
- Supplaying confication metadata.
- ngModule like java pakeges,c++ namespaces.
- properties :Declarations(components, directives, and pipes local scope ), Exports, Imports, Bootstrap, Providers(global scope).

### 2.MetaData or Decorators

- MetaData tells the angular on how to process typescrpit class.
- Decotrator start with @ sign .
- metadata proparties in a JSON format.
- there are lot of metadata for expamles @Components, @ngModule ,@Input, @Output..
- @Service not a decoatator.have to use the @injecble for angualr services.

### 3.Template Syntax

- A template is a chunk of HTML.
- just like regular HTML, but with a lot more functionality.
- Control the UX/UI by coordinating data between the class and the template.

1. Interpolation.
2. Template expressions.
3. Template statements.
4. Binding syntax.

- One-way Binding:- Interpolation, Proparty, Attribute, Class, Style( data source
  to view target)
- One-way Binding:- Event( view target
  to data source)
- Two-way Binding:-Two-way
- Data binding automatically keeps your page up-to-date based on your application's state.
- HTML attributes and DOM properties

* attributes is string value
* attributes is not change
* properties is boolan
* Property and attribute comparison( boolean value is easy to read, the syntax is shorter, and a property is more performant.)
* disabled(boolan property) property of the button's DOM element, not the attribute.
* Remember that HTML attributes and DOM properties are different things, even when they have the same name.

5. Property binding.
6. Event binding.
7. Two-way binding.
8. Attribute, class, and style bindings
9. Built-in directives

- Built-in attribute directives
- Built-in structural directives

10. Template reference variables
11. Input and output properties.
12. Template expression operators.
    - pipe (|)
    - safe navigation operator ( ?. )
