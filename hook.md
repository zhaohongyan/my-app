# 规则
+ 只在最顶层使用 Hook
+ 只在 React 函数中调用 Hook

自定义 Hook 是一种自然遵循 Hook 设计的约定，而并不是 React 的特性。

* useState
* useEffect
* useContext
* useReducer

## useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
* useCallback
返回一个 memoized 回调函数。
```
const memoizedCallback = useCallback(() => {doSomething(a, b);},[a, b],);
```

* useMemo
返回一个 memoized 值。
```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

* useRef
* useImperativeHandle 


