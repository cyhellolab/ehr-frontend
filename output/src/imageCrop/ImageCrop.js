define(["require","json"],function(e){"use strict";function n(e){$.extend(this,n.defaultOptions,e),this.init()}if(window.ImageCrop)return window.ImageCrop;var t=e("json");n.prototype={constructor:n,init:function(){var e=this;e.movieName="_ImageCrop_"+r++,n.instances[e.movieName]=e;var t=$(e.getFlashHTML());e.element.replaceWith(t),e.swf=t[0]},getFlashHTML:function(){var e=this,t=e.flashUrl;return['<object id="',e.movieName,'" type="application/x-shockwave-flash" data="',t,'" width="',e.width,'" height="',e.height,'" class="imagecrop">','<param name="wmode" value="transparent" />','<param name="movie" value="',t,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value=\''+e.getFlashVars()+"' />","</object>"].join("")},getFlashVars:function(){var e=this;return["movieName="+encodeURIComponent(e.movieName),"action="+encodeURIComponent(e.action),"accept="+encodeURIComponent(e.accept),"adaptive="+encodeURIComponent(e.adaptive),"header="+(e.header?encodeURIComponent(t.stringify(e.header)):""),"button="+(e.button?encodeURIComponent(t.stringify(e.button)):""),"minSize="+($.type(e.minSize)==="number"?e.minSize:""),"maxSize="+($.type(e.maxSize)==="number"?e.maxSize:""),"minWidth="+($.type(e.minWidth)==="number"?e.minWidth:""),"maxWidth="+($.type(e.maxWidth)==="number"?e.maxWidth:""),"minHeight="+($.type(e.minHeight)==="number"?e.minHeight:""),"maxHeight="+($.type(e.maxHeight)==="number"?e.maxHeight:""),"src="+encodeURIComponent(t.stringify(e.src)),"dest="+encodeURIComponent(t.stringify(e.dest))].join("&amp;")},upload:function(){var e=this.swf;e.upload&&e.upload()},leftRotate:function(){var e=this.swf;e.leftRotate&&e.leftRotate()},rightRotate:function(){var e=this.swf;e.rightRotate&&e.rightRotate()},isReady:function(){var e=this.swf;if(e.isReady)return e.isReady()},dispose:function(){var e=this,t=e.swf;t.dispose&&t.dispose(),e.swf=e.element=window[this.movieName]=n.instances[e.movieName]=null}},n.defaultOptions={flashUrl:e.toUrl("./imageCrop.swf")},n.instances={},n.version="0.0.1";var r=0;return window.ImageCrop=n,n});