function text(wg, msg) {
	const meta = JSON.parse(msg.text);
	switch(meta.type) {
		default:
			break;
	}
}
const dGap = 0.001 // tiny time gap between choreos 
function note(wg, msg) {
	if(wg.choreo) {
		const choreo = wg.choreo[msg.note];
		if(choreo) {
			switch(choreo.type) {
				case "focus": {
					const id = wg.getLayer('C1').id;
					var tl = wg.getLayer('C1').tl;
					tl.to(id, {x: choreo.x, y: choreo.y, scale: choreo.scale, rotate: choreo.rotate, duration: msg.dSecs - dGap, ease: "power2.out"}, msg.ABST);
				}
				break;
			}
		}		
	} else
	{
		switch(msg.note) {
			case "C 3": {
				// Bounce
				const id = wg.getLayer('C1').id;
				var tl = wg.getLayer('C1').tl;
				tl
					.to(id, {scale: 1.2, duration: 0.001, ease: "power4.out"}, msg.ABST)
					.to(id, {scale: 1, duration: msg.dSecs * 0.5 - dGap, ease: "back.out"});
				break;			
			}
			case "C#3": {
				// Bounce Little
				const id = wg.getLayer('C1').id;
				var tl = wg.getLayer('C1').tl;
				tl
					.to(id, {scale: 1.05, duration: 0.001, ease: "power4.out"}, msg.ABST)
					.to(id, {scale: 1, duration: msg.dSecs * 0.5 - dGap, ease: "back.out"});
				break;			
			}
			case "E 3": {
				// Shake
				const id = wg.getLayer('A1').id;
				var tl = wg.getLayer('A1').tl;
				tl
					.to(id, {rotate: -15, duration: msg.dSecs * 0.25, ease: "power4.out"}, msg.ABST)
					.to(id, {rotate: 0, duration: msg.dSecs * 0.25, ease: "power4.in"})
					.to(id, {rotate: 15, duration: msg.dSecs * 0.25, ease: "power4.out"})
					.to(id, {rotate: 0, duration: msg.dSecs * 0.25 - dGap, ease: "power4.in"});
				break;			
			}
			case "C 4": {
				// Blink Eye
				const id = wg.getLayer('C1').id;
				var tl = wg.getLayer('C1').tl;
				tl
					.to(`${id} > svg > path.svgmorph`, {duration: 0.1, attr: { d: wg.act.close.d }, ease: "power4.out"}, msg.ABST)
					.to(`${id} > svg > path.svgmorph`, {duration: msg.dSecs, attr: { d: wg.act.open.d }, ease: "power4.out"});

				tl
					.to(`${id} > svg > circle.iris`, {duration: 0.1, opacity: 0, ease: "power4.out"}, msg.ABST)
					.to(`${id} > svg > circle.iris`, {duration: msg.dSecs / 3, opacity: 1, ease: "power4.in"}, msg.ABST + 0.1);
			}
			
			default:
				break;
		}
	}	
}

export { text, note };