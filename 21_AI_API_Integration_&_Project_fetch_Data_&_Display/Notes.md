### 📌API Key Security
---
Never expose API keys in frontend code.

**Why?**
- Anyone can see and use the key.
- They can consume your API credits.
- Your subscription cost may increase.

**Best Practice:** Keep API keys on the **backend/server**.


### 📌Reduce AI API Cost
---
Set a **token/word limit** in the AI model instructions.

> “Keep responses within a specific token/word limit.”

**Benefit:** Shorter responses → fewer tokens used → **lower API usage & cost**.


### 📌JSON Viewer Pro
---

JSON Viewer Pro → JSON data-কে সুন্দর ও readable format-এ দেখানোর browser extension।

👉 কাজ: JSON-এর complex data-কে **formatted, organized এবং easy to read** করে।


### 📌JSON Data & Access
---
#### JSON Structure

```json
{
  "results": [
    {
      "name": {
        "first": "Delphine"
      },
      "email": "delphine.smith@example.com",
      "location": {
        "street": {
          "name": "Main Street"
        }
      }
    }
  ]
}
````

#### Accessing JSON Data

```js
obj.results
```

→ `results` array access

```js
obj.results[0]
```

→ Array-এর first object access

```js
obj.results[0].email
```

→ First object-এর `email` access

```js
obj.results[0].location.street.name
```

→ Nested `name` access

#### Access Pattern

```text
Object
  ↓
Property (.)
  ↓
Array [index]
  ↓
Nested Property (.)
```

👉 JSON data access করতে **dot notation (`.`)** এবং **array index (`[0]`)** ব্যবহার করা হয়।


### 📌Loading State

API/data fetch করার সময় **Loading message/indicator** দেখানো good practice।

👉 User যেন বুঝতে পারে যে data এখনও load হচ্ছে।

sonarQube Extention for better code w

# 📝 Modal — Note
### 1. Modal কী?

Modal হলো একটি Popup Window বা Dialog Box, যা কোনো ওয়েবপেজের উপরে প্রদর্শিত হয়। এটি ব্যবহারকারীকে তথ্য দেখাতে বা কোনো Action নিতে সাহায্য করে, নতুন পেজে না গিয়েই।
Example: Login Popup, Product Details, Confirmation Box.

### 2. Modal কেন ব্যবহার করা হয়?

ওয়েবসাইটে Modal ব্যবহার করা হয়:
* বর্তমান পেজ ছেড়ে অন্য পেজে না গিয়ে তথ্য দেখানোর জন্য।
* Login, Register ও Form প্রদর্শনের জন্য।
* Product Details দেখানোর জন্য।
* Delete Confirmation বা অন্য কোনো Action নেওয়ার জন্য।

