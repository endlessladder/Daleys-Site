(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 163,
	height: 164,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9F4143").p("AG5t4QglAAhcgHQhYgHgxAAQiiABhRBJQgEADgBAEQgRAVgoAqQgmAogSAYQgdAlgRAvQgPAmgKA3QgPBLgMCvQgLCjgVBYQgIAdgYBUQgWBJgJArQgTBcgRCMQgIBMgMCLQgMCVgHBCQASAKAUAOQAIhLALiHQANiSAGg/QAWjeBKj3QAahaALiUQAQjPAFgkQAJhCAPgtQAUg5AigqQAPgSArgtQAlgnATgaQAFgGgCgHQAqgeBDgKQAtgHBLAAQAoAABQAFQBRAGAoAAQAOAAAAgPQAAgPgOgBg");
	this.shape.setTransform(46.1,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F4143").s().p("AnGNtQAHhCAMiVQAMiLAIhMQARiMAThcQAJgrAWhJQAYhUAIgdQAVhYALijQAMivAPhLQAKg3APgmQARgvAdglQASgYAmgoQAogqARgVQABgEAEgDQBRhJCigBQAxAABYAHQBcAHAlAAQAOABAAAPQAAAPgOAAQgoAAhRgGQhQgFgoAAQhLAAgtAHQhDAKgqAeQACAHgFAGQgTAaglAnQgrAtgPASQgiAqgUA5QgPAtgJBCQgFAkgQDPQgLCUgaBaQhKD3gWDeIgTDRQgLCHgIBLIgmgYg");
	this.shape_1.setTransform(46.1,90.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-4.4,93.2,186.2);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9F4143").p("ABfpnQgFB8gjC/QgwEEgHAyQgEArgKBwQgIBigKA5QgXCBg9CkQgDALALADQALADAEgKQAPgrAZhpQAWhgAVgyQA2iIgJg6QgIgdgEgOQgHgZAEgdQACgWAxj2QAnjJAIi1QABgLgMAAQgLAAgBALg");
	this.shape.setTransform(12.3,63.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F4143").s().p("AhsJzQgLgDADgLQA9ikAXiBQAKg5AIhiQAKhwAEgrQAHgyAwkEQAji/AFh8QABgLALAAQAMAAgBALQgIC1gnDJQgxD2gCAWQgEAdAHAZIAMArQAJA6g2CIQgVAygWBgQgZBpgPArQgDAHgIAAIgEAAg");
	this.shape_1.setTransform(12.3,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,25.7,127.6);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9F4143").p("ABiAnQgJgdgRgpIgFgMQgEgKgCgKQgMgggHgZIgDgSQgUhAgLgqIgTAEQgMAegVA+QgGAngFARIgKAfIgCAJQgEAXgQAxQgPAvgEAbQgJA+AlAxQAoA0A9gOQBAgPARhDQANg1gThFg");
	this.shape.setTransform(11.4,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD3538").s().p("AhODNQglgxAJg+QAEgbAPgvQAQgxAEgXIACgJIAKgfQAFgRAGgnQAVg+AMgeIATgEQALAqAUBAIADASQAHAZAMAgQACAKAEAKIAFAMQARApAJAdQATBFgNA1QgRBDhAAPQgOACgKAAQguAAgfgog");
	this.shape_1.setTransform(11.4,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,24,51.4);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9F4143").p("AMmQ6QgIhjgGiLQgGiegEhQQgFhsgKhsQgEgsgOggQgQgjgfgaQgHgFgHAAQg6g6gIgHQgngkgkgPQg4gWhTgCQheACgwgCQAcgbgGgyQgFgngXgnQgfg0gxgeQgpgZg+gPIAAgCQgIg4Aeg1QAFgJgDgKQBnAeBaAGQBaAFBCgOQBUgSA3gxQBMhFgSh8QgKhIg5iBIgyh2QgKgZgIgcQgGgTgFgYIgCgJIAAgMQgCghABgvQABg2AAgbQAEithAh8Qgdg6g4g9QgogshCg5QiBhviIg3QhNgfhPAEQhZADg5AwQgYAQgNAYQg6Aag+BEQhcBlgQAOQgTARgzAnQgsAjgYAXQgqAngWAzQgTAugGA+QgHBEAdB7QAeB/gFA6QgMCmABAYQADBtAzBFQAyBDBLAiIADAFIABACIAAAAIABADIAAABQACAIAEAGQgKAMAIARQAFANAAANQgBAOgIAJIgDAEIgGgBQgJgEgHAIQglAvgbBFQgeBLgDBDQgEBCBiAKQA2AFBogIQBhAACZAcQDPAmAnAFQBTAJAUABQA+ACAngQQACAMAMABQAQABBvgBQBOgBAxANQApAKAtAmQAQAOA5A5QABAHAGAGQAiAcAMAuQAEAPAIBJQAFAvADBAQACAlACBKQANEuAKCCQAHBfgBBFQgCBZgQBKQgMA4g5BcQg6BggOAzQgUBKAYAgQAIANAMABQALABAGgJQBGhmBGkmQAThOABhjQAAhCgIhwgAAZi0IgFgBQiPgbhJgMQh9gVhfgMIh6gOQARgngVgwIgCgDIADgFQBSAXCGgBQBKgBCPgEQBDABBjAgIgEAGQghA5AEBFgADvBbQgVAVg+gCQgBAAhXgIQhRgIiKgZQilgfg3gIQgkgFhRAAQhMABgpgIQhmgSAYhYQAQg5BFhZQABABADgFQACgFABAAQAKALAXgRQBJAJBjARQAFABCmAdQAXAEBCANQA3ALAhAFIBFAMQAEAIAJABQAIACAJgEQArAJApAPQA3AUAnBHQArBLgrAqg");
	this.shape.setTransform(81.9,184.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F4143").s().p("AJ9cxQgMgBgIgNQgYggAUhKQAOgzA6hgQA5hcAMg4QAQhKAChZQABhFgHhfQgKiCgNkuIgEhvQgDhAgFgvQgIhJgEgPQgMgugigcQgGgGgBgHQg5g5gQgOQgtgmgpgKQgxgNhOABQhvABgQgBQgMgBgCgMQgnAQg+gCQgUgBhTgJQgngFjPgmQiZgchhAAQhoAIg2gFQhigKAEhCQADhDAehLQAbhFAlgvQAHgIAJAEIAGABIADgEQAIgJABgOQAAgNgFgNQgIgRAKgMQgEgGgCgIIAAgBIgBgDIAAAAIgBgCIgDgFQhLgigyhDQgzhFgDhtQgBgYAMimQAFg6geh/Qgdh7AHhEQAGg+ATguQAWgzAqgnQAYgXAsgjQAzgnATgRQAQgOBchlQA+hEA6gaQANgYAYgQQA5gwBZgDQBPgEBNAfQCIA3CBBvQBCA5AoAsQA4A9AdA6QBAB8gECtIgBBRQgBAvACAhIAAAMIACAJQAFAYAGATQAIAcAKAZIAyB2QA5CBAKBIQASB8hMBFQg3AxhUASQhCAOhagFQhagGhngeQADAKgFAJQgeA1AIA4IAAACQA+APApAZQAxAeAfA0QAXAnAFAnQAGAygcAbQAwACBegCQBTACA4AWQAkAPAnAkQAIAHA6A6QAHAAAHAFQAfAaAQAjQAOAgAEAsQAKBsAFBsIAKDuQAGCLAIBjQAIBwAABCQgBBjgTBOQhGEmhGBmQgFAIgKAAIgCAAgAlzAeQA3AIClAfQCKAZBRAIIBYAIQA+ACAVgVQArgqgrhLQgnhHg3gUQgpgPgrgJQgJAEgIgCQgJgBgEgIIhFgMQghgFg3gLIhZgRIirgeQhjgRhJgJQgXARgKgLQgBAAgCAFQgDAFgBgBQhFBZgQA5QgYBYBmASQApAIBMgBQBRAAAkAFgAAZi0QgEhFAhg5IAEgGQhjgghDgBIjZAFQiGABhSgXIgDAFIACADQAVAwgRAnIB6AOQBfAMB9AVIDYAnIAFABIAAAAg");
	this.shape_1.setTransform(81.9,184.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.5,164.8,372.8);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9F4143").p("ALAkxQgCgHgIAAQg4gDh8gaQh1gZg/AAQhNAAhsgaQh7ghg6gNQiIgfi+ABQjbAHhxAAQgIAEgMABQgDAEABAEQABAEAEACQAOBdAAB9QAAAMgDDPQgBA3gKBwQgBAfAJAgQAHAXARAlQAEAKAIADQAGACANAAQANgBAXAFQAcAHAHABQAnAFA+gEQAcgBBLgHQBBgGAmgBQA3AABCAKQAuAHBKARQA6AOB4AbQBnAZBLAVQBfAbAlAIQBLAQA8gBQAxAAAZgWQAagXAGguQAHg6gHhUQgKhfgDguQgEg3ASiQQARh+gShLgAKdBMQADAwAJBeQAGBUgCA5QgCAlgJARQgMAYgeAIQggAIgsgEQgXgDg1gKQhCgNkZhLQjTg4iKgMQg7gEhuAKQhzAKg2gDQgPAAgigIQgggGgSABQgNAAgLgwQgJgkgBgUQgBgXAFgpQAGguAAgTQACh3ABg9QAEi+gRh2QDigRDnAdQCGAQEMAsQBPALClAQQCNASBQAfQABAAAbAAQAVAAACALQAGAWACAvQABAsgKBOQgEAcgJA5QgHAvACAjg");
	this.shape.setTransform(71.8,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F4143").s().p("AHPHGQglgIhfgbQhLgVhngZIiygpQhKgRgugHQhCgKg3AAQgmABhBAGQhLAHgcABQg+AEgngFIgjgIQgXgFgNABQgNAAgGgCQgIgDgEgKQgRglgHgXQgJggABgfQAKhwABg3IADjbQAAh9gOhdQgEgCgBgEQgBgEADgEQAMgBAIgEQBxAADbgHQC+gBCIAfQA6ANB7AhQBsAaBNAAQA/AAB1AZQB8AaA4ADQAIAAACAHQASBLgRB+QgSCQAEA3QADAuAKBfQAHBUgHA6QgGAugaAXQgZAWgxAAIgHAAQg5AAhHgPgAjYEYQCKAMDTA4QEZBLBCANQA1AKAXADQAsAEAggIQAegIAMgYQAJgRACglQACg5gGhUQgJhegDgwQgCgjAHgvIANhVQAKhOgBgsQgCgvgGgWQgCgLgVAAIgcAAQhQgfiNgSQilgQhPgLQkMgsiGgQQjngdjiARQARB2gEC+IgDC0QAAATgGAuQgFApABAXQABAUAJAkQALAwANAAQASgBAgAGQAiAIAPAAQA2ADBzgKQBMgHAzAAQAYAAASABg");
	this.shape_1.setTransform(71.8,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-2.1,144.8,97.6);


(lib.RD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9F4143").p("ABiAnQgJgdgRgpIgFgMQgEgKgCgKQgMgggHgZIgDgSQgUhAgLgqIgTAEQgMAegVA+QgGAngFARIgKAfIgCAJQgEAXgQAxQgPAvgEAbQgJA+AlAxQAoA0A9gOQBAgPARhDQANg1gThFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F4143").s().p("AhODNQglgxAJg+QAEgbAPgvQAQgxAEgXIACgJIAKgfQAFgRAGgnQAVg+AMgeIATgEQALAqAUBAIADASQAHAZAMAgQACAKAEAKIAFAMQARApAJAdQATBFgNA1QgRBDhAAPQgOACgKAAQguAAgfgog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-25.6,24,51.7);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3D3D3D").ss(12).p("EAhCAAAQAAGuimGIQigF8klElQklEll7CgQmJCmmuAAQmtAAmIimQl8ihklkkQkkklihl8QimmJAAmtQAAmtCmmJQChl7EkklQElklF8igQGIimGtAAQGuAAGJCmQF7CgElElQElElCgF7QCmGJAAGtg");
	this.shape.setTransform(414.1,225.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As1ecQl8ihklkkQkkklihl8QimmJAAmtQAAmtCmmJQChl7EkklQElklF8igQGIimGtAAQGuAAGJCmQF7CgElElQElElCgF7QCmGJAAGtQAAGuimGIQigF8klElQklEll7CgQmJCmmuAAQmtAAmIimg");
	mask.setTransform(414.1,225.4);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3D3D3D").p("ABiAnQgJgdgRgpIgFgMQgEgKgCgKQgMgggHgZIgDgSQgUhAgLgqIgTAEQgMAegVA+QgGAngFARIgKAfIgCAJQgEAXgQAxQgPAvgEAbQgJA+AlAxQAoA0A9gOQBAgPARhDQANg1gThFg");
	this.shape_1.setTransform(124.2,211.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD3538").s().p("AhODNQglgxAJg+QAEgbAPgvQAQgxAEgXIACgJIAKgfQAFgRAGgnQAVg+AMgeIATgEQALAqAUBAIADASQAHAZAMAgQACAKAEAKIAFAMQARApAJAdQATBFgNA1QgRBDhAAPQgOACgKAAQguAAgfgog");
	this.shape_2.setTransform(124.2,211.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#3D3D3D").p("ABfpnQgFB8gjC/QgwEEgHAyQgEArgKBwQgIBigKA5QgXCBg9CkQgDALALADQALADAEgKQAPgrAZhpQAWhgAVgyQA2iIgJg6QgIgdgEgOQgHgZAEgdQACgWAxj2QAnjJAIi1QABgLgMAAQgLAAgBALg");
	this.shape_3.setTransform(321.2,354.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4D").s().p("AhsJzQgLgDADgLQA9ikAXiBQAKg5AIhiQAKhwAEgrQAHgyAwkEQAji/AFh8QABgLALAAQAMAAgBALQgIC1gnDJQgxD2gCAWQgEAdAHAZIAMArQAJA6g2CIQgVAygWBgQgZBpgPArQgDAHgIAAIgEAAg");
	this.shape_4.setTransform(321.2,354.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#3D3D3D").p("ALAkxQgCgGgIgBQg4gDh8gaQh1gZg/AAQhNAAhsgaQh7ggg6gOQiIgfi+ABQjbAHhxAAQgLAFgJAAQgDAEABAEQABAEAEACQAOBdAAB9QAAAMgDDQQgBA2gKBwQgCAfAKAhQAGAVASAmQAEAKAIADQAGACANAAQAOgBAWAGQAeAGAFABQAiAFBDgDQAWgBBRgIQA/gGAoAAQA3gBBCALQAuAHBKARQA6AOB4AbQBoAYBKAVQBfAbAlAIQBLAQA8gBQAxAAAZgWQAagWAGgvQAHg6gHhTQgKhggDguQgEg3ASiQQARh9gShMgAKdBNQADAvAJBeQAGBUgCA5QgCAlgJASQgMAXgfAIQgfAJgsgFQgZgCgzgLQg/gMkchMQjTg4iKgLQg7gFhuAKQh0ALg1gDQgOgBgjgHQgfgHgTABQgNAAgLgvQgJglgBgUQgBgXAFgpQAGguAAgTIADizQAEi/gRh1QDigSDnAdQCGAQEMAsQBPALClARQCOARBPAfQABAAAbAAQAVABACAKQAGAXACAuQABAsgKBPQgEAcgJA4QgHAvACAkg");
	this.shape_5.setTransform(415.4,308);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D3D3D").s().p("AHPHGQglgIhfgbQhKgVhogYIiygpQhKgRgugHQhCgLg3ABQgoAAg/AGQhRAIgWABQhDADgigFIgjgHQgWgGgOABQgNAAgGgCQgIgDgEgKQgSgmgGgVQgKghACgfQAKhwABg2IADjcQAAh9gOhdQgEgCgBgEQgBgEADgEQAJAAALgFQBxAADbgHQC+gBCIAfQA6AOB7AgQBsAaBNAAQA/AAB1AZQB8AaA4ADQAIABACAGQASBMgRB9QgSCQAEA3QADAuAKBgQAHBTgHA6QgGAvgaAWQgZAWgxAAIgHAAQg5AAhHgPgAjYEZQCKALDTA4QEcBMA/AMQAzALAZACQAsAFAfgJQAfgIAMgXQAJgSACglQACg5gGhUQgJhegDgvQgCgkAHgvIANhUQAKhPgBgsQgCgugGgXQgCgKgVgBIgcAAQhPgfiOgRQilgRhPgLQkMgsiGgQQjngdjiASQARB1gEC/IgDCzQAAATgGAuQgFApABAXQABAUAJAlQALAvANAAQATgBAfAHQAjAHAOABQA1ADB0gLQBJgHAzAAQAZAAAUACg");
	this.shape_6.setTransform(415.4,308);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D3D3D").s().p("AnGNtQAHhCAMiVQAMiLAIhMQARiMAThcQAJgrAWhJQAYhUAIgdQAVhYALijQAMivAPhLQAKg3APgmQARgvAdglQASgYAmgoQAogqARgVQABgEAEgDQBRhJCigBQAxAABYAHQBcAHAlAAQAOABAAAPQAAAPgOAAQgoAAhRgGQhQgFgoAAQhLAAgtAHQhDAKgqAeQACAHgFAGQgTAaglAnQgrAtgPASQgiAqgUA5QgPAtgJBCQgFAkgQDPQgLCUgaBaQhKD3gWDeIgTDRQgLCHgIBLIgmgYg");
	this.shape_7.setTransform(328.7,317.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3D3D3D").s().p("AJ9cxQgMgBgIgNQgYggAUhKQAOgzA6hgQA5hcAMg4QAQhKAChZQABhFgHhfQgKiCgNkuIgEhvQgDhAgFgvQgIhJgEgPQgMgugigcQgGgGgBgHQg5g5gQgOQgtgmgpgKQgxgNhOABQhvABgQgBQgMgBgCgMQgnAQg+gCQgUgBhTgJQgngFjPgmQiZgchhAAQhoAIg2gFQhigKAEhCQADhDAehLQAbhFAlgvQAHgIAJAEIAGABIADgEQAIgJABgOQAAgNgFgNQgIgRAKgMQgEgGgCgIIAAgBIgBgDIAAAAIgBgCIgDgFQhLgigyhDQgzhFgDhtQgBgYAMimQAFg6geh/Qgdh7AHhEQAGg+ATguQAWgzAqgnQAYgXAsgjQAzgnATgRQAQgOBchlQA+hEA6gaQANgYAYgQQA5gwBZgDQBPgEBNAfQCIA3CBBvQBCA5AoAsQA4A9AdA6QBAB8gECtIgBBRQgBAvACAhIAAAMIACAJQAFAYAGATQAIAcAKAZIAyB2QA5CBAKBIQASB8hMBFQg3AxhUASQhCAOhagFQhagGhngeQADAKgFAJQgeA1AIA4IAAACQA+APApAZQAxAeAfA0QAXAnAFAnQAGAygcAbQAwACBegCQBTACA4AWQAkAPAnAkQAIAHA6A6QAHAAAHAFQAfAaAQAjQAOAgAEAsQAKBsAFBsIAKDuQAGCLAIBjQAIBwAABCQgBBjgTBOQhGEmhGBmQgFAIgKAAIgCAAgAlzAeQA3AIClAfQCKAZBRAIIBYAIQA+ACAVgVQArgqgrhLQgnhHg3gUQgpgPgrgJQgJAEgIgCQgJgBgEgIIhFgMQghgFg3gLIhZgRIirgeQhjgRhJgJQgXARgKgLQgBAAgCAFQgDAFgBgBQivDgCoAcQApAIBMgBQBRAAAkAFgAAZi0QgEhFAhg5IAEgGQhjgghDgBIjZAFQiGABhSgXIgDAFIACADQAVAwgRAnIB6AOQBfAMB9AVIDYAnIAFABIAAAAg");
	this.shape_8.setTransform(444.2,234.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3D3D3D").p("EAhCAAAQAAGuimGIQigF8klElQklEll7CgQmJCmmuAAQmtAAmIimQl8ihklkkQkkklihl8QimmJAAmtQAAmtCmmJQChl7EkklQElklF8igQGIimGtAAQGuAAGJCmQF7CgElElQElElCgF7QCmGJAAGtg");
	this.shape_9.setTransform(414.1,225.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("As1ecQl8ihklkkQkkklihl8QimmJAAmtQAAmtCmmJQChl7EkklQElklF8igQGIimGtAAQGuAAGJCmQF7CgElElQElElCgF7QCmGJAAGtQAAGuimGIQigF8klElQklEll7CgQmJCmmuAAQmtAAmIimg");
	this.shape_10.setTransform(414.1,225.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#3D3D3D").ss(12).p("AEiEiIpDAAIAApDIJDAAg");
	this.shape_11.setTransform(35,101);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AD3538").s().p("AkgEhIAApCIJBAAIAAJCg");
	this.shape_12.setTransform(35,101);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.7,1.7,441.3,447.5);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#9F4143").ss(12).p("EAhCAAAQAAGuimGIQigF8klElQklEll7CgQmJCmmuAAQmtAAmIimQl8ihklkkQkkklihl8QimmJAAmtQAAmtCmmJQChl7EkklQElklF8igQGIimGtAAQGuAAGJCmQF7CgElElQElElCgF7QCmGJAAGtg");
	this.shape_13.setTransform(414.1,225.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("As1ecQl8ihklkkQkkklihl8QimmJAAmtQAAmtCmmJQChl7EkklQElklF8igQGIimGtAAQGuAAGJCmQF7CgElElQElElCgF7QCmGJAAGtQAAGuimGIQigF8klElQklEll7CgQmJCmmuAAQmtAAmIimg");
	mask_1.setTransform(414.1,225.4);

	// Layer 3
	this.instance = new lib.Path();
	this.instance.setTransform(124.6,211.8,1,1,0,0,0,11.8,25.5);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(321.1,354.7,1,1,0,0,0,12.2,63.2);

	this.instance_2 = new lib.CompoundPath();
	this.instance_2.setTransform(415.8,308,1,1,0,0,0,71.8,46.4);

	this.instance_3 = new lib.Path_2();
	this.instance_3.setTransform(328.7,315.7,1,1,0,0,0,46.1,88.6);

	this.instance_4 = new lib.CompoundPath_1();
	this.instance_4.setTransform(444.3,235.5,1,1,0,0,0,82,185.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#9F4143").p("EAhCAAAQAAGuimGIQigF8klElQklEll7CgQmJCmmuAAQmtAAmIimQl8ihklkkQkkklihl8QimmJAAmtQAAmtCmmJQChl7EkklQElklF8igQGIimGtAAQGuAAGJCmQF7CgElElQElElCgF7QCmGJAAGtg");
	this.shape_14.setTransform(414.1,225.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2E4B0").s().p("As1ecQl8ihklkkQkkklihl8QimmJAAmtQAAmtCmmJQChl7EkklQElklF8igQGIimGtAAQGuAAGJCmQF7CgElElQElElCgF7QCmGJAAGtQAAGuimGIQigF8klElQklEll7CgQmJCmmuAAQmtAAmIimg");
	this.shape_15.setTransform(414.1,225.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#9F4143").ss(12).p("AEiEiIpDAAIAApDIJDAAg");
	this.shape_16.setTransform(35,101);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AD3538").s().p("AkgEhIAApCIJBAAIAAJCg");
	this.shape_17.setTransform(35,101);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.7,1.7,441.3,447.5);


(lib.rain_drop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RD("synched",0);
	this.instance.setTransform(-25.7,-56,0.15,0.15,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-23.8,y:-46},0).wait(1).to({x:-22,y:-35.9},0).wait(1).to({x:-20.1,y:-25.8},0).wait(1).to({x:-18.2,y:-15.7},0).wait(1).to({x:-16.4,y:-5.6},0).wait(1).to({x:-14.5,y:4.5},0).wait(1).to({x:-12.7,y:14.6},0).wait(1).to({x:-10.8,y:24.7},0).wait(1).to({x:-8.9,y:34.8},0).wait(1).to({x:-7.1,y:44.9},0).wait(1).to({x:-5.2,y:55},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-60.6,5.3,9.3);


(lib.home_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-34.6,-0.2,0.363,0.363,0,0,0,318.4,224.6);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(-34.6,0,0.364,0.364,0,0,0,318.9,225.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.3,-81.2,231.8,162.6);


(lib.raingroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rain_drop("synched",0);
	this.instance.setTransform(-29.5,98.3,1,1,0,0,0,0.3,0.5);

	this.instance_1 = new lib.rain_drop("synched",0);
	this.instance_1.setTransform(-16.7,23.5,1,1,0,0,0,0.3,0.5);

	this.instance_2 = new lib.rain_drop("synched",0);
	this.instance_2.setTransform(-37.1,57.1,1,1,0,0,0,0.3,0.5);

	this.instance_3 = new lib.rain_drop("synched",0);
	this.instance_3.setTransform(-3.5,57.1,1,1,0,0,0,0.3,0.5);

	this.instance_4 = new lib.rain_drop("synched",0);
	this.instance_4.setTransform(79.1,96.7,1,1,0,0,0,0.3,0.5);

	this.instance_5 = new lib.rain_drop("synched",0);
	this.instance_5.setTransform(89.2,70.3,1,1,0,0,0,0.3,0.5);

	this.instance_6 = new lib.rain_drop("synched",0);
	this.instance_6.setTransform(73.6,23.5,1,1,0,0,0,0.3,0.5);

	this.instance_7 = new lib.rain_drop("synched",0);
	this.instance_7.setTransform(66.4,39.5,1,1,0,0,0,0.3,0.5);

	this.instance_8 = new lib.rain_drop("synched",0);
	this.instance_8.setTransform(66.4,71.9,1,1,0,0,0,0.3,0.5);

	this.instance_9 = new lib.rain_drop("synched",0);
	this.instance_9.setTransform(-35.5,79.6,1,1,0,0,0,0.3,0.5);

	this.instance_10 = new lib.rain_drop("synched",0);
	this.instance_10.setTransform(-21.5,64.8,1,1,0,0,0,0.3,0.5);

	this.instance_11 = new lib.rain_drop("synched",0);
	this.instance_11.setTransform(83.3,48.8,1,1,0,0,0,0.3,0.5);

	this.instance_12 = new lib.rain_drop("synched",0);
	this.instance_12.setTransform(14.3,-0.4,1,1,0,0,0,0.3,0.5);

	this.instance_13 = new lib.rain_drop("synched",0);
	this.instance_13.setTransform(34.7,-0.4,1,1,0,0,0,0.3,0.5);

	this.instance_14 = new lib.rain_drop("synched",0);
	this.instance_14.setTransform(-6.1,36.9,1,1,0,0,0,0.3,0.5);

	this.instance_15 = new lib.rain_drop("synched",0);
	this.instance_15.setTransform(-32.9,36.9,1,1,0,0,0,0.3,0.5);

	this.instance_16 = new lib.rain_drop("synched",0);
	this.instance_16.setTransform(0.7,12.9,1,1,0,0,0,0.3,0.5);

	this.instance_17 = new lib.rain_drop("synched",0);
	this.instance_17.setTransform(58.7,7.3,1,1,0,0,0,0.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-61.5,131.5,108);


// stage content:



(lib.rain_hover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.home_button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.adobe.com", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AojI9QjcjdgLkyIgBggQAAlGDojnQDnjnFFAAIAhAAQEyAMDcDbQDnDnAAFGQAAFIjnDnQjnDnlIAAQlFAAjnjng");
	mask.setTransform(80,80.4);

	// Isolation Mode
	this.instance = new lib.raingroup("synched",8);
	this.instance.setTransform(83.5,66.9,1,1,0,0,0,11.9,26.2);

	this.instance_1 = new lib.raingroup("synched",5);
	this.instance_1.setTransform(133.5,78.5,1,1,0,0,0,11.9,26.2);

	this.instance_2 = new lib.raingroup("synched",1);
	this.instance_2.setTransform(96.7,79.7,1,1,0,0,0,11.9,26.2);

	this.instance_3 = new lib.raingroup("synched",4);
	this.instance_3.setTransform(86.9,77.3,1,1,0,0,0,11.9,26.2);

	this.instance_4 = new lib.raingroup("synched",8);
	this.instance_4.setTransform(83.5,66.9,1,1,0,0,0,11.9,26.2);

	this.instance_5 = new lib.raingroup("synched",5);
	this.instance_5.setTransform(133.5,78.5,1,1,0,0,0,11.9,26.2);

	this.instance_6 = new lib.raingroup("synched",1);
	this.instance_6.setTransform(96.7,79.7,1,1,0,0,0,11.9,26.2);

	this.instance_7 = new lib.raingroup("synched",4);
	this.instance_7.setTransform(86.9,77.3,1,1,0,0,0,11.9,26.2);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(11));

	// Layer 1
	this.home_button = new lib.home_button();
	this.home_button.setTransform(46.9,82,1,1,0,0,0,-34.6,0);
	new cjs.ButtonHelper(this.home_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.home_button).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.7,82.8,231.8,162.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;