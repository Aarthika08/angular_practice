The @Input decorator is used in Angular to define an input property for a component. 
An input property allows a parent component to pass data to a child component. 
The @Input decorator is applied to a property of a component class.

**syntax**

>@Input() propertyName:type = defaultValue
>

@Input(): This decorator indicates that the property following it is an input property.
propertyName: This is the name of the property that will be used as the input property.
type: This specifies the type of the input property. It can be any valid TypeScript type.
defaultValue: This is an optional parameter that allows you to set a default value for the input property.

**Example**

>import { Component, Input } from '@angular/core';
>
>@Component({
>
>  selector: 'app-example',
>
>  template: `
>
>    <p>{{ inputText }}</p>
>
>  `,
>
>})
>
>export class ExampleComponent {
>
>  @Input() inputText: string = 'Default Text';
>
>}

In HTML

<app-example [inputText]="parentText"></app-example>


> [!IMPORTANT]
> Key information users need to know to achieve their goal.


Binding Syntax: When using an input property, you need to use square brackets ([]) to bind the property to an expression in the parent component's template.

Data Flow: Input properties allow data to flow from a parent component to a child component. Changes in the parent component are reflected in the child component.

Default Values: You can provide a default value for an input property by assigning a value during its declaration.


> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
