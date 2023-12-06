async function getApi(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const resData = await res.json();
    getCard(resData);
  } catch (e) {
    if (e.response.status == 404) {
      getErrorCard("Error! No Username Found.");
    }
  }
}

function getCard(data) {
  const userID = data.name || data.login;
  const userBio = data.bio ? `<p>${data.bio}</p>` : "";
  const cardDiv = `
    <div class="card" id="mainCard">
    <div class="card__image">
    <img
      class="card-img-top"
      src="${data.avatar_url}"
      alt="avatar.png"
    />
    </div>
    <div class="card-body">
    <div class="cardBody__heading">
        <h1>${userID}</h1>
        <p class="card-text">${userBio}</p>
    </div>
    <div class="cardBody__ul">
    <ul>
        <li>${data.followers} <strong>Followers</strong></li>
        <li>${data.following} <strong>Following</strong></li>
        <li>${data.public_repos} <strong>Repos</strong></li>
    </ul>
    </div>
    <div class="cardBody__other">
    <p>Twitter : ${data.twitter_username ? data.twitter_username : "NA"}</p>
    <p>Location : ${data.location ? data.location : "NA"}</p></div>  
    </div>
  </div>
    `;
  document.getElementById("main").innerHTML = cardDiv;
}

function getErrorCard(message) {
  const cardDiv = `
  <div class="card">
  <h1>${message}</h1>
  </div>
    `;
  document.getElementById("main").innerHTML = cardDiv;
}

// wihtout submit button approach
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("search").value;

  if (username) {
    getApi(username);
    document.getElementById("search").value = "";
  }
});
