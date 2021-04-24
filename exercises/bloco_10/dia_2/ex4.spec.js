const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

test('testando url', async (done) => {
  const response = await getRepos('https://api.github.com/orgs/tryber/repos')
  expect(response).toContain('sd-01-week4-5-project-todo-list')
  done()
})