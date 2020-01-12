const colors = {
  green: {
    background: "#E6E1C3",
    color: "black",
  },
  blue: {
    background: "#5F64D3",
    color: "white",
  },
  pink: {
    background: "#879CDF",
    color: "white",
  },
  red: {
    background: "#DE9967",
    color: "white",
  }
};

function generateHTML(data) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Profile</title>
        <style>
          .container {
            background-color: ${colors[data.color].background};
            color: ${colors[data.color].color};
          }

          .photo-header {
            position: relative;
            margin: 0 auto;
            margin-bottom: -50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 10px;
            width: 95%;
            border-radius: 6px;
          }

          .photo-header img {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            margin-top: -75px;
            border: 6px solid;
            box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
          }

          .workExp-date {
            font-style: italic;
            font-size: .7em;
            text-align: right;
            margin-top: 10px;
          }

          @media print { 
            body { 
              zoom: .75; 
            } 
          }
          </style>

          </head>
          <body>
            <div class="container">
              <header class="photo-header">
                <img src="${data.avatar_url}" alt="GitHub Profile Picture" class="photo-header img">
              </header>
              <main>
                <p>Hi</p>
                <p>My name is ${data.name}!</p>
                <p>Currently at ${data.company}</p>
                <p>${data.location}</p>
                <a href="${data.html_url}">Link to GitHub</a>
                <a href="${data.blog}">Linke to blog</a>
                <p>${data.bio}</p>
              </main>
              <div class="row">
                <div class="col col-md-6">
                  <h2>Public Repositories</h2>
                  <h2>${data.public_repos}</h2>
                </div>
                <div class="col">
                  <h2>Followers</h2>
                  <h2>${data.followers}</h2>
                </div>
              </div>
              <div class="row">
                <div class="col col-md-6">
                  <h2>GitHubStars</h2>
                </div>
                <div class="col">
                  <h2>Following</h2>
                  <h2>${data.following}</h2>
                </div>
              </div>
            </div>
            </body>
          </html>
      `
}

module.exports = generateHTML;
