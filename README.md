# React useEffect Cleanup Issue with setInterval

This example demonstrates a common mistake in React's `useEffect` hook when using `setInterval`.  The issue arises from an improper use of closures, leading to the interval not being cleared when the component unmounts.

## Bug

The `bug.js` file shows how an incorrect use of a closure can prevent the `clearInterval` function from properly stopping the interval.

## Solution

The `bugSolution.js` file provides the corrected implementation, ensuring the interval is always cleared when the component unmounts, preventing potential memory leaks and unexpected behavior.