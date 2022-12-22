// Question 1
// Create a typeguard to determine whether a value is an object
// the guard should only return true for values that an average developer would consider an object
// the guard should not return true for values that a JS engine developer would consider an object

// Create a typeguard to determine whether a value is an object
function isObject(val: unknown): val is Record<string, unknown> {
  // the guard should only return true for values that an average developer would consider an object
  if (typeof val === 'object' && val !== null && !Array.isArray(val)){
    return true;
  }
  // the guard should not return true for values that a JS engine developer would consider an object
  return val instanceof Object? false : true;
}

console.log(isObject(null));

// Question 2
// Show how to an extend a type using interfaces and type def

type Gender = 'male' | 'female';

interface Person {
  id: number,
  firstName: string,
  lastName: string,
  gender: Gender,
  fullName(): string
}

interface Student extends Person {
  class: string,
  grade: number
}

let me: Student = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  gender: 'male',
  class: 'CS204',
  grade: 87,
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
}

console.log(me.fullName());

// Question 3
// Create a type that collects a set of string values such that
// when the type is used as a function parameter typing, a string can be used
// as an argument in a typesafe way
// BONUS: generate this type from a constant value

type ParameterStrings = {
	[key: String]: String;
}

//BONUS:
const MY_STRINGS: ParameterStrings = {
	key1: "value1",
	key2: "value2",
	key3: "value3"
};

// Question 4
// What advanced typescript type allows you to define a type from another type
// but with a specific subset of properties excluded?

The Exclude type. This type allows you to create a new type from an existing type, but excludes specific properties from the source type.

// Question 5
// What is the difference between never and unknown?

The difference between never and unknown in TypeScript is that never is used to indicate that a value should never be assigned to a variable, and unkwon means that everything assigned to that type will result in an error unless you assign it to another type at some point.

// Question 6
// What is the difference between object and Record type?

Object type in TypeSript is a type that represents the non-primitive type(primitive values are undefined , null , booleans, numbers, bigints, strings), i.e. any complex type(a student, bank account, computer screen, rational number, or data structure such as a queue, stack, or list). It is a type to be used with objects which represent realistic.
Record type in Typescript is a type that represents an object which has a set of named properties. Each property has its own type, and these are key and value.


// Question 7
// create an extremely simple React component that updates state using
// an input of any kind
// explicitly type as much as possible

import React, {useState} from 'react';

type InputProps = {
	initialValue: String;
};

const InputComponent: React.FC<InputProps> = ({initialValue}) => {
	const [inputValue, setInputValue] = useState(initialValue);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event: target.value);
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={handleChange}
			/>
		</div>
	);
}
