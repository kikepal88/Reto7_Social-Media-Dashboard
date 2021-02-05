let ids = ["body", "header", "h1", "header-line-separator", "mode-selector", "mode-mark", "article-facebook", "article-twitter", "article-instagram", "article-youtube", "article-facebook-user", "article-twitter-user", "article-instagram-user", "article-youtube-user", "article-facebook-followers", "article-twitter-followers", "article-instagram-followers", "article-youtube-followers", "overview", "overview-cards-face1", "overview-cards-face2", "overview-cards-insta1", "overview-cards-insta2", "overview-cards-twit1", "overview-cards-twit2", "overview-cards-yout1", "overview-cards-yout2", "cards-dates-face1", "cards-dates-face2", "cards-dates-insta1", "cards-dates-insta2", "cards-dates-twit1", "cards-dates-twit2", "cards-dates-yout1", "cards-dates-yout2"];

const addClassList = function(item_id) {
  for (let i = 0; i < ids.length; i++) {
    document.getElementById(item_id[i]).classList.toggle("darktheme");
  };
};

function darkMode() {
  addClassList(ids);
}
