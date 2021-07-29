# Angular

- Angular is a JavaScript framework.
- Create reactive Single Page Applications.
- MVC framework.
- Maintainability, Productivity, Consistency

## Componets

- Components are the main building block for Angular applications

* class
* template
* metadata

## 1. ngModule

- It is a deacter.
- Supplaying confication metadata.
- ngModule like java pakeges,c++ namespaces.
- properties :Declarations(components, directives, and pipes local scope ), Exports, Imports, Bootstrap, Providers(global scope).

## 2. Decorators

- Decorators- Typescript feature used for passing metadata.
- Decorators- Decorators are functions that will retrun function.
- Decorators- invoke at runtime.
- Decorators- start with @ sign .
- Decotrator where expression must evaluate to a function that will be called at runtime with information about the decorated declaration(behaviors).

- Decorators types

1. Class Decorators - @ngModule @Component
2. Proparty Decorators- @Input @Output
3. Methord Decorators- @HostListaner
4. Parameter Decorators- @Inject

- Decorators

1. @ ngModule

- Supplaying confication metadata.

2. @ Component

- identifies the class it as a component class, and specifies its metadata

3. @ Input

- Parent to Child share data.

4. @ Output

- Child to Parent share data.

5. @ ViewChild

- access and manipulate DOM elements, directives and components (multiple not posbblie use viewChildern)

6. @ ViewChildren

- Returns the specified elements or directives from the view DOM as QueryList

7. @ Directive

- custom behavior to elements in the DOM.
- attrubute Custom
- strcteral custom

8. @ HostBinding and @HostListener

- useful in custom directives
- @HostBinding lets you set properties on the element or component that hosts the directive
- @HostListener lets you listen for events on the host element or component.

9. @ ContentChild and @ ContentChildren

- ContentChild is used to select projected content.
- ContentChild get access to an element in the content of the component or directive.
- ContentChild has an equivalent decorator to select multiple elements.

## 3. MetaData

- MetaData tells the angular on how to process typescrpit class.
- metadata proparties in a JSON format.
- @Service not a decoatator.have to use the @injecble for angualr services.

## 4. Template Syntax

- A template is a chunk of HTML.
- just like regular HTML, but with a lot more functionality.
- Control the UX/UI by coordinating data between the class and the template.

1. Interpolation.
2. Template expressions.
3. Template statements.
4. Template reference variables
5. Property binding.
6. Event binding.
7. Two-way binding.
8. Attribute, class, and style bindings

9. Built-in directives

- Built-in attribute directives
- Built-in structural directives

10. Template expression operators.

- pipe (|)
  - transform data
  - Pipes are simple functions you can use in template expressions to accept an input value and return a transformed value.
  - bulit in pipe and Custom pipe
- safe navigation operator ( ?. )

11. Binding syntax.

- One-way Binding:- Interpolation, Proparty, Attribute, Class, Style ( data source
  to view target)
- One-way Binding:- Event( view target
  to data source)
- Two-way Binding:-Two-way
- Data binding automatically keeps your page up-to-date based on your application's state.
- HTML attributes and DOM properties
- attributes is string value
- attributes is not change
- Attributes are refering to additional information of an object.
- Properties are describing the characteristics of an object
- Property and attribute comparison( boolean value is easy to read, the syntax is shorter, and a property is more performant.)
- disabled(boolan property) property of the button's DOM element, not the attribute.
- Remember that HTML attributes and DOM properties are different things, even when they have the same name.

## 5. Directives

- Directives are classes additional behavior to elements (tempate or html).
- common, form, router (ngIf, formGroup, routerLink)..
- Type of Directives

1. Components

- it has its own tempates
- directives with a template

2. Attribute directives.

- change the appearance or behavior of an element, component, or another directive.

* ngClass
* ngStyle
* ngModel

3. Structural directives

- change the DOM layout by adding and removing DOM elements.

* ngfor
* ngIf
* ngSwitch

4. Custom directive

- extend the functionality of HTML

1. Custom Attribute Directive
2. Custom Structural Directive

## 6. Share data between Componets

1. Parent to Child: @Input
2. Child to Parent: @Output() and EventEmitter
3. Child to Parent: @ViewChild
4. sibling: Use Serviecs Unrelated Components

## 7. Element

- Dom Element
  1. ng-container - hold directives without creating an HTML element.
  2. ng-content - project content inside a component template.
  3. ng-template - render the content manually.doesn't render anything by default.only stucteral directives for use

## 8. Lifecycle hooks

- number of methods called in a sequence to execute a component at specific moments is known as lifecycle hook.
- Interface is a fundamental instrument to hook into the lifecycle
- Interface is “AfterViewInit,” and the method for this is ” ngAfterViewInit.”

1. Constructor() -One time

- one Time Call
- constructor is a special method which will be called whenever we create new objects
- generally used of initializing the class members

2. ngOnChanges() -Every Time

- handle the changes.
- @input poparty change
- changed property name to a SimpleChange object, which holds the current and previous property values

3. ngOnInit() -One time

- after the constructor is called and all the variables are initialized.

4. ngDoCheck() -Every Time

- becarefully handile
- any change working start this methord infintiy call.
- First parent after child after all componet.(app componet all paces work this ngDoCheck())
- each time anything that can trigger change detection has fired (e.g. click handlers, HTTP requests, route changes, etc…). This lifecycle hook is mostly used for debug purposes;

5. ngAfterContentInit()-one Time

- This is called after components external content(through ng-content) has been initialized.

6. ngAfterContentChecked() -Every Time

- fully initialized the component/directive's content.

7. ngAfterViewInit() -one Time

- Fully initialized all content of a directive.
- First Child after parent

8. ngAfterViewChecked() -Every Time

- method that is invoked immediately after the default change detector has completed one change-check cycle for a component's view.

9. ngOnDestroy() -one time

## 9. Services

- data and functinally reusable.
- Easy data access and manipulation
- Share data across one or multiple components

## 10. Observables

- sequences of data which is emitted asynchronously over period of time.
- angualr use Observables most asyc opertions.
  1. http
  2. Routing
  3. Event handing
- Observer are just objects with three callbacks
- Observer is keep traking observable
- Observer is continuously listeing observable use three methords
  1. next()
  2. error()
  3. complete()
- third-party library called Reactive Extensions (RxJS)
- Observables help you pass data asynchronously and are great for calling on an API
- They are similar to promises
- Promises execute once and then are done.Observable continue to be observed after the event occurs
- Promises cannot be cancelled
- RxJs provides a method called “pipe” to interact with streams
  1. map
  2. fillter
  3. subject - communcate croess component
  4. catchError

## 11. Form

- Handling user input with forms
- perform many other data-entry tasks.
- two approch

1. Template-driven forms

- simple form
- esay to use
- don't scale as well as reactive forms
- Data flow - Asynchronous
- Data modal - Unstructured and mutable
- Form validation - Directives
- FormModule, ngForm, ngSubmit, ngModel, ngModelGroup
- way to handling valudations

  1. Highligth the errors
  2. Disable the submit button
  3. Custom felid valudation -show/hide Error Message

- Set value in template-driven forms
  1. Two-way data binding
  - Set value default
  - Set value individually
  - Reset form
  2. Use the template reference variable
  - Set value default
  - Set value individually
  - Set value of nested FormGroup
  - patch value
  - Reset values

3. Reactive forms

- used to create Angular reactive form.
- scalable, reusable, testable
- Data model - Structured and immutable
- Data flow - Synchronous
- Form validation - Functions
- three fundamental API

  1. FormControl

  - it is a class. get and set values and valudation.(input tag)

  * FormControl Directive - FormControl instance to form a control element.
  * FormControlName - FormGroup under FormControl control.

  2. FormGroup

  - track value and validity state of group of FormControl

  3. FormArray

  - tracks the value and validity state of array of FormControl, FormGroup or FormArray

  4. FormBuilder

  - The FormBuilder provides syntactic sugar that shortens creating instances of a FormControl, FormGroup, or FormArray

- Grouping form controls

  1. FormGroup with FormControl
  2. FormGroup with FormControl, FormArray, Nexted FormGroup
  3. FormBuilder with FormControl
  4. FormBuilder with FormControl,FormArray, Nexted FormBuilder

- Control status CSS classes
  - .ng-valid
  - .ng-invalid
  - .ng-pending
  - .ng-pristine
  - .ng-dirty
  - .ng-untouched
  - .ng-touched
  - .ng-submitted

## 12. Routing

- navigate from one view to another view

1. RouterModule
2. Configaring Routes
3. RouterOutlet
4. Routerlink
5. Wildcard router
6. Redirecting router
7. router parameter
8. Child Routes / Nested Routes
9. Relative router (:id)
10. Types of module loading
    1. Eager loading
    - by defult loading
    - root module is always eager loading
    - All module are downloaded after application strat
    - working fine small apllication
    2. Lazy loading
    - Lazy loading helps you render an application faster
    - Feature modules under Lazy Loading would be loaded on demand after the application starts
    3. Preloading
    - enable preloading of all lazy loaded modules
    - Lazy loaded Modules in the background asynchronously
    - two type bulit-in and Custom-type
11. Router guads
    - canActivate( LoginGuard, LoginOutGuard )

## 13. Http module

- HTTP is a protocol (protocol is systm rule that define how data is exchanged)
- OSI modal Application layout
- http - Hyper Text Transfer Protocol
- communication between web clients and servers
- Table Of Contents

1. HTTP Client module
2. HTTP GET, POST, PUT, DELETE
3. Type Safety
4. Request Parameters
5. HTTP Headers
6. RxJs operator

   - map - map to transform a collection of items into a collection of different items.
   - filter - fitering data

7. HTTP Error Handling

   - Catching Errors in HTTP Request
   - track your errors to improve UX

8. Component

   - observable The second callback error

9. Service

   - catchError Retrun throw it back to component

10. Globally

    - You are unauthorized to access the API Service,
    - You are authorized, but forbidden to access a particular resource
    - The API End Point is invalid or does not exist
    - Network error
    - Server down

11. HTTP Interceptors

    - Interceptors are a unique type of Angular Service
    - intercept incoming or outgoing HTTP requests using the HttpClient modify
    - similar to the concept of middle-ware with a framework like Express
    - chain Interceptors
    - Interceptors Applications

    * Handling HTTP Headers (Auth)
    * The Global HTTP error handling(404,500,401)
    * BasePath set
    * Request respone time calculate
    * Loading spnner using

12. Progress HTTP Events

13. HTTP Status Codes

- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not found
- 500 - internal Server Error

## 14. Change Detection

- Change Detection means updating the view (DOM) when the data has changed.
- two Change Detection Strategies
  1. default
  - Change Detection checks for all components from top to bottom if a template value has changed.
  2. onPush
  - This change detection strategy provides the possibility to skip unnecessary checks for this component and all it’s child components.
  - the change detector is only triggered if a new reference is passed as @Input() value.
  - Be careful - not do not trigger change detection(setTimeout,setInterval, any RxJS observable subscription(http))
- that cause change detection trigger ?

  - any browser event (click, keyup, etc.)
  - setInterval() and setTimeout()
  - HTTP requests via XMLHttpRequest

- value types

  1. data types (number,string,boolean,etc..)
  2. data structures (array,object,etc..)

- Memory Type

1. stack memory
   - store their value on the stack memory(data types) technically not true
2. heap memory
   - store a reference on the stack memory.which points to their actual value on the heap memory.(data structures)

- Understanding ChangeDetectorRef
  - detectChanges
  - markForCheck
  - detach

## 15. Animation

- Animation provides the illusion of motion: HTML elements change styling over time.
- npm install @angular/animations@latest --save
- import BrowserAnimationsModule preferably in your root module.

---

1.matrials
