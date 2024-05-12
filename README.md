[Deployed to Vercel](https://next-test-proj-pm5zavrq0-egor-kalinichevs-projects.vercel.app/)

### Note on TRPC usage

This setup is specific to the case where there's no dedicated backend server and everything runs within Next.js.
Technically, everything could've been done with just ServerActions, but since TRPC is a requirement for the task
(and likely real-world scenario when backend would be running separately), I've set it up in a way that it's available
both in Server and Client components and opted out of use of ServerActions for the sake of consistency. Using two
tools that solve same problem just creates additional complexity.
