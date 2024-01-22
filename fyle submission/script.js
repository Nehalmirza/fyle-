function getRepositories() {
  const username = document.getElementById("username").value;
  const repositoriesList = document.getElementById("repositories-list");

  // Clear previous results
  repositoriesList.innerHTML = "";

  // Fetch GitHub repositories using the GitHub API
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((repositories) => {
      repositories.forEach((repo) => {
        const repoElement = document.createElement("p");
        repoElement.innerHTML = `<strong>${repo.name}</strong>: ${
          repo.description || "No description available"
        }`;
        repositoriesList.appendChild(repoElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching repositories:", error);
      repositoriesList.innerHTML =
        "<p>Error fetching repositories. Please try again.</p>";
    });
}
