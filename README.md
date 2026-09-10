# Challenge #3 — Async User Dashboard

## Overview
I built this with the help of AI for LEARNING PURPOSES. This was built for me to practice react and become better at it with the help of ai.
Build a React + TypeScript dashboard that displays users and their posts using data fetched from external APIs.

The goal of this challenge is to practice **dependent data fetching**, **state ownership**, **controlled components**, **derived data**, and **asynchronous UI states**.

## Requirements

* Fetch and display a list of users.
* Display loading and error states while fetching users.
* Allow the user to select a user from a controlled dropdown.
* Fetch posts based on the currently selected user's ID.
* Display independent loading and error states for the posts request.
* Display information about the selected user:

  * Name
  * Username
  * Email
  * Number of posts
* Display the selected user's posts.
* Render each post using a separate `PostCard` component.
* Handle cases where no posts are available.
* Use an `AbortController` to cancel stale requests when the selected user changes.
* Do not use Redux, `useReducer`, TanStack Query, or a backend.

## APIs

### Users

```text
https://jsonplaceholder.typicode.com/users
```

### Posts

```text
https://jsonplaceholder.typicode.com/posts?userId={userId}
```

## Suggested Component Structure

```text
App
├── UserSelect
├── UserInfo
└── PostList
     └── PostCard
```

## Concepts Practiced

* `useState`
* `useEffect`
* Custom hooks
* Controlled form components
* Props and callbacks
* Lifting state up
* State ownership
* Derived data
* Conditional rendering
* Async loading/error states
* `AbortController`
* Effect cleanup
* Effect dependency arrays
* Hook state persistence
* Component identity and hook ordering
* Race conditions
* TypeScript union types
* `find()` vs `filter()`
* Nullish coalescing (`??`)
* Separation of responsibilities

## Main Learning Objective

The primary goal is not simply to make the dashboard work, but to understand **why it works**.

In particular, understand the complete flow:

```text
User interaction
      ↓
State update
      ↓
Component rerender
      ↓
Changed effect dependency
      ↓
Effect cleanup
      ↓
New effect
      ↓
API request
      ↓
State update
      ↓
Rerender
      ↓
Derived data + UI update
```
