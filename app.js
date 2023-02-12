const compareButton = document.getElementById("compare");
compareButton.addEventListener("click", compare);

async function compare() {
  const username1 = document.getElementById("username1").value;
  const username2 = document.getElementById("username2").value;

  try {
    const response1 = await fetch(`https://api.github.com/users/${username1}`);
    const data1 = await response1.json();

    const response2 = await fetch(`https://api.github.com/users/${username2}`);
    const data2 = await response2.json();

    // Compare the number of followers
    const winner = data1.followers > data2.followers ? data1.login : data2.login;

    // Show the winner
    const result = document.getElementById("result");
    result.innerHTML = `<h2>The winner is: <span>${winner}</span></h2>`;

    // Show the user's avatar and name
    const avatar1 = document.getElementById("avatar1");
    avatar1.innerHTML = `<img src="${data1.avatar_url}" alt="Avatar of ${data1.login}" />`;

    const name1 = document.getElementById("name1");
    name1.innerHTML = `<h3>${data1.login}</h3>`;

    const avatar2 = document.getElementById("avatar2");
    avatar2.innerHTML = `<img src="${data2.avatar_url}" alt="Avatar of ${data2.login}" />`;

    const name2 = document.getElementById("name2");
    name2.innerHTML = `<h3>${data2.login}</h3>`;
  } catch (error) {
    console.error(error);
  }
}
