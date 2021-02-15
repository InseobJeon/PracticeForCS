# Making Type Checker with OOP

## 과제의 목표
전달된 값의 데이터형 매치 여부를 체크하는 객체형 판별함수를 개발해봐바용

## 객체클래스명 
typeChecker

## 구현될 인터페이스

### typeChecker.string(value)
=> 문자인지만 판별, 아니면 나가리

### typeChecker.number(value,strictMode)
=> 숫자인지만 판별, 아니면 나가리

### typeChecker.number.int(value,strictMode)
=> 정수형 숫자인지만 판별, 아니면 나가리

### typeChecker.number.decimal(value,strictMode)
=> 소수인지만 판별, 아니면 나가리

### typeChecker.function(value)
=> 함수인지만 판별, 아니면 나가리

### typeChecker.boolean(value)
=> true/false 값인지만 판별, 아니면 나가리

### typeChecker.object(value)
=> 객체인지만 판별, 아니면 나가리

### typeChecker.object.isnull(value)
=> 비어있는 객체인지만 판별, 아니면 나가리

### typeChecker.array(value)
=> 배열객체인지만 판별, 아니면 나가리

### typeChecker.array.isnull(value)
=> 비어있는 배열객체인지만 판별, 아니면 나가리

## 실행 결과
//선언

```jsx
var x=[
   'a',
   '가',
   1,
   '1',
   '0.2221',
   {},
   {a:1},
   [],
   function a(){},
   true,
   0,
   [1,2,3],
];

var check=new typeChecker();

var a=check.string(x[0]);
** 인자값 x[0]부터 x.length까지 전부 테스트할 것(이하 마찬가지)
=> 0,1,3,4번값이 들어가면 true 아니면 false 나와야함

var b=check.number(x[0]);
=> 2,3,4번값이 들어가면 true 아니면 false 나와야함
** 만일 인자값에 strictMode===true가 설정되었을 경우 2번값만 true나와야함(이하 서브함수 전부 동일)

var c=check.number.int(x[0]);
=> 2번값이 들어가면 true 아니면 false 나와야함

var d=check.number.decimal(x[0]);
=> 4번만 true

var e=check.function(x[0]);
=> 8번만

var f=check.boolean(x[0]);
=> 2,9,10이 true,true,false 나와야함. boolean형 인자는 true false와 1 0의 네 가지가 동작해야함

var g=check.object(x[0]);
=> 5,6 true

var h=check.object.isnull(x[0]);
=> 6 true

var i=check.array(x[0]);
=>  7,11 true

var j=check.array.isnull(x[0]);
=> 7 true
```
---

## Advanced Seciton
```jsx
typeChecker.number.int(value,strictMode)
typeChecker.number.decimal(value,strictMode)
typeChecker.object.isnull(value)
typeChecker.array.isnull(value)
```

1. 위 네개를 각각 상위함수인 typeChecker.number typeChecker.object에서 상속받아 구현할것
2. 기능을 체이닝으로 전환시킬것 즉,
`check.string(x[0]).number(x[0]).object(x[0]).array(x[0])`
이따구로 동작이 되도록 고안할 것


