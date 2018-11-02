
function fnScroll(oScrollbox, oBox, oScroll, oBar){
	function getId( id ){
		return document.querySelector( id );
	}
	var oScrollbox = getId(oScrollbox),
	oBox = getId(oBox),
	oScroll = getId(oScroll),
	oBar = getId(oBar),
	iT = 0;
	var	maxTop = 0,
	minTop = 0,
	scale = 0;
	setScroll();
	window.onresize = function(){
		setScroll();
	}
	oScroll.onmousedown = function(){
		return false;
	}

	oBar.onmousedown = function(ev){
		var ev = ev || event,
		disY = ev.clientY - this.offsetTop;

		document.onmousemove = function(ev){
			var ev = ev || event,
			scale = 0;

			iT = ev.clientY - disY;
			fnScroll();
		}
		document.onmouseup = function(){
			document.onmouseup = document.onmousemove = null;
		}
		return false;
	}

	if(oScrollbox.addEventListener){
		oScrollbox.addEventListener('DOMMouseScroll',mouseScroll);
		oScroll.addEventListener('DOMMouseScroll',mouseScroll);
	}

	oScrollbox.onmousewheel = mouseScroll;
	oScroll.onmousewheel = mouseScroll;

	function setScroll(){
		oScroll.style.display = 'block';
		oScroll.style.height = oScrollbox.clientHeight + 'px';
		oBar.style.height = oScrollbox.clientHeight / oBox.offsetHeight * oScrollbox.offsetHeight + 'px';
		oBox.style.top=oBar.style.top='0px';
		if( oBar.offsetHeight >= oScroll.offsetHeight ){
			oScroll.style.display = 'none';
			oBox.style.top = 0 + 'px';
			oScrollbox.onmousewheel = oScroll.onmousewheel = null;
		}else{
			oScroll.style.display = 'block';
		}
		maxTop = oScroll.clientHeight - oBar.offsetHeight;
		minTop = oScrollbox.clientHeight - oBox.offsetHeight;
	}

	function fnScroll(){
		if( iT <= 0 ) iT = 0;
		if( iT >= maxTop ) iT = maxTop;

		scale = iT / maxTop;
		oBox.style.top = minTop * scale + 'px';
		oBar.style.top = iT + 'px';
	}

	function mouseScroll(ev){
		var ev = ev || event,
		b = true;

		if( ev.detail ){
			b = ev.detail < 0 ? false : true;
		}else{
			b = ev.wheelDelta < 0 ? true : false;
		}
		b ? iT += 20 : iT -= 20;
		fnScroll();

		if(ev.preventDefault) ev.preventDefault();
		return false;
	}
}

export {fnScroll}
