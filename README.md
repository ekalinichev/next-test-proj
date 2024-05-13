[Deployed to Vercel](https://next-test-proj-two.vercel.app/)

### Note on TRPC usage

This setup is specific to the case where there's no dedicated backend server and everything runs within Next.js.
Technically, everything could've been done with just ServerActions, but since TRPC is a requirement for the task
(and likely real-world scenario when backend would be running separately), I've set it up in a way that it's available
both in Server and Client components and opted out of use of ServerActions for the sake of consistency. Using two
tools that solve same problem just creates additional complexity.

Known issue is that this doesn't give us server-side rendering of TRPC queries, so UX is slightly annoying.
I am aware of [existing approach](https://github.com/solaldunckel/next-13-app-router-with-trpc), but adapting it to this
app is very much out of scope.

I see that the task is pre-Next App Router, probably should've stuck to Pages router, but it's too late now. I hope
resulting code still gives decent representation of my skill level.

### Total time spent

4-something hours, starting from `npx create-next-app`
