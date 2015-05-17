var hotLoadUrl = "http://localhost:3333";

var whenHotLoaderRunning = function(cb) {
  var isRunning = $.get(hotLoadUrl+"/meteor-hot-loader-running");

  isRunning.then(function(res) {
    res = JSON.parse(res);

    if (res.status === 'running') {
      cb(null, res);
    }
  }, function(err) {
    cb(err);
  });
};

function injectHotLoader() {
  hotLoadScript = document.createElement("script");
  hotLoadScript.src = hotLoadUrl;
  document.head.appendChild(hotLoadScript);
}

whenHotLoaderRunning(function(err, res) {
  if (err) {
    console.warn("HotLoader is not running.");
    console.warn("Please install meteor-hot-loader with `npm install -g meteor-hot-loader` \nand run it in your app with `meteor-hot-loader`");
    return;
  }

  injectHotLoader();
});
