$(function () {
  function loadTabs() {
    return new Promise(function (resolve) {
      $.getJSON('tabs.json', resolve);
    });
  }

  function buildTabView(tab) {
    var div = document.createElement('div');

    div.className = 'tab-view';

    $.each(tab.images, function (index, url) {
      var image = document.createElement('img');
      var type = index % 2 === 0 ? 'even' : 'odd';

      image.className = 'tab-image tab-image-' + index + ' tab-image-' + type;
      image.src = 'tabs/' + url;

      div.appendChild(image);
    });

    return div;
  }

  function renderTab(tab) {
    var tabView = buildTabView(tab);
    var root = document.getElementById('root');

    root.appendChild(tabView);
  }

  loadTabs().then(function(tabs) {
    renderTab(tabs[0]);
  });
});
