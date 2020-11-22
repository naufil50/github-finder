const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('search-user')

searchUser.addEventListener('keyup', function (e) {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message == 'Not Found' ) {
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    ui.clearProfile();
  }
});