# Expo AsyncStorage Error: Component Unmounts Before Async Operation

This repository demonstrates a common issue encountered when using AsyncStorage in Expo applications. The problem arises when a component that utilizes AsyncStorage unmounts before an asynchronous operation (like `getItem`, `setItem`, or `removeItem`) finishes. This can lead to unexpected behavior, crashes, or silent data inconsistencies.

## Problem

The `bug.js` file shows an example of this error.  When you navigate away from the screen before AsyncStorage completes its task, you might not get a clear error message, but the application's state might be corrupted or unexpected behavior might occur.

## Solution

The `bugSolution.js` file demonstrates how to mitigate this using the `useEffect` hook and the cleanup function to abort pending AsyncStorage operations.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the application using Expo Go or a similar Expo CLI.
4. Navigate to the screen that uses AsyncStorage.
5. Quickly navigate away from the screen before the asynchronous operation finishes (this might require some experimentation).
6. Observe the unexpected behavior or the lack of expected change in the data stored in AsyncStorage.