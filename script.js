(function(){
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var c = Shape.Circle(150, 150, 25);
  c.fillColor = 'green';

  paper.view.draw();

}())