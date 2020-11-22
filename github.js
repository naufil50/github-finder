class GitHub {
  constructor(){
    this.client_id = '23493ad269226cd92295';
    this.client_secret = '31dc3d9e0a89115ef1630f23d1333990e6c18a2e';
    this.repos_count = 5;
    this.repos_sort = 'created_at: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}