'use strict';
module.exports = function() {
    return $.gulp.src("./source/fonts/*.woff")
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
};

