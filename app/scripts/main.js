
;(function (window) {
  'use strict';

  $('#contributions').dataTable({
    "data": dataSet,
    "columns": [
      { "title": "Engine" },
      { "title": "Browser" },
      { "title": "Platform" },
      { "title": "Version", "class": "text-center" },
      { "title": "Grade", "class": "text-center" }
    ]
  });

}(this));

