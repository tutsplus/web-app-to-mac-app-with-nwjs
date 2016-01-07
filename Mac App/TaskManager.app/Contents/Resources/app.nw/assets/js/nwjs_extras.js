var gui = require('nw.gui');
var mb = new gui.Menu({type:"menubar"});
mb.createMacBuiltin("TaskManager");
gui.Window.get().menu = mb;