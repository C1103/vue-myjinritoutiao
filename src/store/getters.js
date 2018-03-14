const getters = {

  homeList: state => state.home.List,
  
  videoList: state => state.video.List,

  headlineList: state => state.headline.List,

  articleInfo: state => state.article.articleInfo,
  pageLoading: state => state.article.pageLoading,

};

export default getters