const urlSlug = require('url-slug');

exports.createPages = async ({actions, graphql, reporter}) => {

    const result= await graphql(`
        query MyQuery {
            allStrapiArticles {
                edges {
                    node {
                        Title
                        id
                    }
                }
            }
        }
    `);

     if(result.errors){

        reporter.panic('Error no reults find', result.errors);

    }

    const articles = result.data.allStrapiArticles.edges;
    console.log(articles)

    articles.forEach( article => {
       
        actions.createPage({

            path: `/blog/${urlSlug( article.node.Title )}`,
            component: require.resolve('./src/components/Article.js'),
            context: {
                id: article.node.id
            }
        });

    });

}