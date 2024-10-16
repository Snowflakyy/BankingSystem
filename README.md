# BankingSystem💻📈
Banking Management System made for Experian's Workshop
**(Sept 2024)**
## 1. Project Overview🏆

BankingSystem is a React-based web application built with TypeScript. It provides a user interface for a banking system, allowing users to view their account information, make transactions, and manage their finances. The app features Auth functionalities.
## 2. Libraries and Technologies📚⚛️
```typescript
npm start
npm i react-redux
```
### 
* The project utilizes the following libraries and technologies: 

- React: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript
- React-Router-dom: Router library used to handle navigation
- Redux: A state management library for React applications
- React Router: For handling routing in the application
- Axios: A promise-based HTTP client for making API requests
- Styled-components: A CSS-in-JS library for component-based styling
- Material-UI: A popular React UI framework
- React Hook Form: A library for flexible and efficient form handling
- Yup: A JavaScript schema validation library

  ## 3. Project Structure🏛️📐

The project follows a modular structure with components, pages, and utility functions organized into separate directories. Here's an overview of the main directories:


```src/
├── components/
├── pages/
├── redux/
├── routes/
├── styles/
├── types/
├── routes/
└──hooks/
```

Design 🖼️
==
(![Dashboard - Dashboard](https://github.com/user-attachments/assets/396e8a67-436f-4a5a-ba3c-c2a1162d3122)
![Dashboard - Dashboard (2)](https://github.com/user-attachments/assets/55289e75-dd15-4205-adb4-f94e9bffac82)
![Dashboard - Dashboard (3)](https://github.com/user-attachments/assets/fc76d1ec-e960-408d-8e93-3c46cffcf6d1)|










TypeSafety🔐
==
### Ensures the data is passed correctly

![image](https://github.com/user-attachments/assets/79e303c0-8bd7-4be9-8835-46d9c9429247)


Hooks 🎯
==

- Validation using zod with TypeScript
- Authentication hook

## Zod hook-form handles form submission while ensuring that data is written in the correct format
```typescript
"./hooks/useZodForm"
```
 Format example:
```typescript
    password: z.string({ required_error:"Field is required" }).regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
```

## UseAuth hookform is invoked when the user is logged
```typescript
"./hooks/useAuth"
```
 A response is invoked containing information regarding the user : access token(lasting 1hr) and whether or not the user is administrator
 Used in every protected page to ensure that no data is leaked
```typescript
  const { user, login, logout } = useAuth();
```

Async/Await
==
Used to handle state management asynchronously in the MVC

![image](https://github.com/user-attachments/assets/78941526-9606-455f-bad5-9e0d7cdc0108)


## 4. Design Patterns⚗

### Barrel Exports

The project uses the barrel export pattern to simplify imports and exports. This pattern involves creating an `index.ts` file in each directory to re-export the contents of other files in that directory.

Example of a barrel export (`src/components/index.ts`):

```typescript
export * from "./Button"
export * from "./Icon"
export * from "./Typography"
```

*
This allows for cleaner imports in other files:
*
```typescript
import { Button, Icon, Typography } from '../components';
```

## 5. Components 🏗️
### Every components is defined using 3 files inside the component folder:
- element.ts
- componentName.ts
- index.ts

  ![image](https://github.com/user-attachments/assets/b7a04070-6af3-4d03-bc83-f53773041672)

 ## 6. API Integration 👨🏻‍🏭

### The project uses Axios for making async API requests.

Example of an API service:

  ![image](https://github.com/user-attachments/assets/b4c9088c-cea3-40ee-a0cc-7a23dcd8dc72)

  ## 7. State Management🗃️

The project uses Redux for state management. The store is configured with reducers and middleware(featuring redux-thunk and redux-logger).

action → dispatch → reducer → store
==

### Actions
```typescript
export const ACTION_TYPES={
    CREATE: "CREATE",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
    FETCH_ID:"FETCH_ID",
    FETCH_ALL_LOANS: "FETCH_ALL_LOANS",
}
```

### Dispatch 
Used to handle actions and forwards the response to the reducer

![image](https://github.com/user-attachments/assets/4487084c-082e-4ee7-976c-14469661adcd)

### Reducer
Used to handle dispatch logic and forward it to the payload

![image](https://github.com/user-attachments/assets/f0c5759d-256f-4c52-a621-e62e7c63f10d)


## 8. Styling🎨🖌️

### The project uses styled-components for styling, along with a theme for consistent design across the application.

Example of the theme configuration:

![image](https://github.com/user-attachments/assets/8b87e5fa-dfdf-4316-82b4-7533684d5646)

Usage of the theme in a styled component:
```typescript
export const Heading4 = styled(({ variant , ...props }: H4Props) => (
  <h4 {...props} />
))`
  ${({ variant }) => variant && theme.typography.h4[variant]}
`;
```

Future-update features🔮⏰
==

### Nested Routes
- Implemented using react-router-dom

### Refresh + Access tokens
- Handled with injected api endpoints to the frontEnd for better security










