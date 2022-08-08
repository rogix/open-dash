const github = {
  baseURL: 'https://api.github.com/graphql',
  username: 'rogix',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
}

export { github }
