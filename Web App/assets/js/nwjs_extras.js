var gui = require('nw.gui');
var mb = new gui.Menu({type:"menubar"});
mb.createMacBuiltin("Task Manager");
gui.Window.get().menu = mb;