//extend Person
interface Person {
  name: string;
  age: number;
}

interface Address {
  city: string;
  country: string;
}

interface FullPersonDetail extends Person, Address {
  isActive: boolean;
}

//baseConfig
interface BaseConfig {
  model: string;
  manufacturer: string;
}

interface DetailedConfig extends BaseConfig {
  name: string;
  type: string;
}

//nested functions
interface inner {
  length: number;
  width: number;
}

interface outer {
  outerLength: number;
  outerWidth: number;
}

interface Nested extends inner, outer {}

//readOnly interface
interface ReadOnlyArr {
  arr: any[];
}

interface ReadOnlyDisplay extends ReadOnlyArr {
  author: string;
}
