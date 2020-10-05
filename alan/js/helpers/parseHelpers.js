function text(wg, msg) {
	const meta = JSON.parse(msg.text);
	switch(meta.type) {
		default:
			break;
	}
}
const dGap = 0.001 // tiny time gap between choreos 
function note(wg, msg) {
	switch(msg.note) {
		case "C 3": {
			// Bounce
			const id = wg.getLayer('C1').id;
			wg.tl
				.to(id, {scale: 1.05, duration: 0.001, ease: "power4.out"}, msg.ABST)
				.to(id, {scale: 1, duration: msg.dSecs * 0.5 - dGap, ease: "back.out"});
			break;			
		}		
		case "D 3": {
			// Zoom In
			const wgSet = wg.findWidgetGlobal('set');
			const id = wgSet.getLayer('P1').id;
			const scale = 3;
			const dx = parseFloat(wgSet.x) - parseFloat(wg.x), dy = parseFloat(wgSet.y) - parseFloat(wg.y);
			wgSet.tl
				.to(id, {x: `+=${dx * scale}px`, y: `+=${dy * scale}px`, scale: scale, duration: msg.dSecs - dGap, ease: "power2.out"}, msg.ABST)
			break;
		}		
		case "D#3": {
			// Zoom In
			const wgSet = wg.findWidgetGlobal('set');
			const id = wgSet.getLayer('P1').id;
			const scale = 3;
			const dx = wgSet.x - wg.x, dy = wgSet.y - wg.y;
			wgSet.tl
				.to(id, {x: `-=${dx * scale}px`, y: `-=${dy * scale}px`, scale: 1, duration: msg.dSecs - dGap, ease: "power2.out"}, msg.ABST);
			break;
		}
		
		default:
			break;
	}
}

export { text, note };