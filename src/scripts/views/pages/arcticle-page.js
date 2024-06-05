/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable indent */

const createCardArticleTemplate = (article) => `
    <div class="list-articles">
        <div class="information">
            <h3>${article.title}</h3>
            <p class="description">${article.description}</p>
            <div class="writer">
                <p>${article.createdAt}</p> |
                <p>${article.writer}</p>
            </div>
        </div>
    </div>
`;

const ArticlePage = {
  async render() {
    return `
        <section class="articles">
          <div id="article-card" class="container article-cards">
          
          </div>
        </section>
      `;
  },

  async afterRender() {
    // Replace the data fetching with a static list of articles
    const articles = [
      {
        id: 1,
        title: 'Static Article 1',
        description: 'Description for static article 1.',
        createdAt: '2024-06-02',
        writer: 'Writer 1',
      },
      {
        id: 2,
        title: 'Static Article 2',
        description: 'Description for static article 2.',
        createdAt: '2024-06-02',
        writer: 'Writer 2',
      },
      {
        id: 3,
        title: 'Static Article 3',
        description: 'Description for static article 3.',
        createdAt: '2024-06-02',
        writer: 'Writer 3',
      },
      // Add more articles as needed
    ];

    const articlesContainer = document.querySelector('#article-card');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createCardArticleTemplate(article);
    });
  },
};

export default ArticlePage;
