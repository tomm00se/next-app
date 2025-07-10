import React from "react";
// Fetch Data using server components! (Better for SEO than Client Compoenents)

interface User {
  id: number;
  name: string;
}

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store", // specifing no-store means Next treats this as data that will be updated frequently, treating it dynamically
  });

  // fetch has data caching built in, it will get data from file system.
  // It can be edited for data that changes frequently
  // https://nextjs.org/docs/app/api-reference/functions/fetch

  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {/* renders static at build time - npm run build shows static pages */}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
