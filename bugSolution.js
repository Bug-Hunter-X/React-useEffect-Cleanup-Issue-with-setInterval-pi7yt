```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    // Correctly managing the interval ID
    intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```