// later implement this using ReactJS (preact for quicker load) or Angular
// also ES6

var colors = {
  "web": "#272830",
  "python": "#464646",
  "chrome": "#317799",
  "coming soon": "#f0efef"
}

var portfolio = {
  create: function(items) {
    return '<div id="work-grid">'+items+'</div>';
  },
  item: function(type, title) {
    var inner = "";
    if (type === undefined || title === undefined) {
      inner = '<span>Coming Soon</span><img src="images/placeholder.png">';
      type = "coming soon";
    }
    else {
      inner = '<span>'+title+'</span><img src="images/work/'+type+'.png">';
    }
    return '<div class="work-grid--item" style="background: '+colors[type]+'">'+inner+'</div>';
  }
  // TODO: filter
}

function getPage() {
  var url_hash = window.location.hash;

  switch (url_hash) {
    case "#cv":
      render("cv");
      break;
    case "#blog":
      render("blog");
      break;
    default:
      render("portfolio");
  }
}

function render(page) {
  var pagehtml = "";

  if (page === "portfolio") {
    var types = ["web", "web", "web", "python", "python", "chrome"];
    var titles = ["Web fixing and dev #1", "Web fixing and dev #2",
    "Web fixing and dev #3", "Web Scraper", "Automated FB Event Poster",
     "Chrome Extension"];
    var contents = "";
    for (var i = 0; i < types.length; i++) {
      contents += portfolio.item(types[i], titles[i]);
    }
    contents += portfolio.item();
    pagehtml = portfolio.create(contents);
  }
  else {
    pagehtml = '<h1 class="bigtext">UNDER CONSTRUCTION</h1>';
  }
  app.innerHTML = pagehtml;
}

getPage();
window.addEventListener('hashchange', getPage);
