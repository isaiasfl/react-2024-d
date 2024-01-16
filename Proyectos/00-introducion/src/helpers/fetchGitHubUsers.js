
const fetchGitHubUsers = async () => {
  const URL="https://api.github.com/users" 
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching")
    throw error;
  }
}

export default fetchGitHubUsers