type RemoveNaughtyChildren<T> = {
  [K in keyof T as K extends `naughty${string}` ? never : K]: T[K]
}
type Name = {
  a: 111,
  'naughty': '111'
}
type result = RemoveNaughtyChildren<Name>
// {
//   a: 111;
// }
