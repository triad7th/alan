import { Widget } from '../classes/widget.js'

function parseText(wg, msg) {
	const meta = JSON.parse(msg.text);
	switch(meta.type) {
		default:
			break;
	}
}
const dGap = 0.001 // tiny time gap between choreos 
function parseNote(wg, msg) {
	switch(msg.note) {
		case "C 3":
			// Bounce
			const id = wg.getLayer('C1').id;
			wg.tl
				.to(id, {scale: 1.05, duration: 0.001, ease: "power4.out"}, msg.ABST)
				.to(id, {scale: 1, duration: msg.dSecs * 0.5 -dGap, ease: "back.out"});
	}
}

export function parseTimeline(wg, msgs) {
	const name = wg.name;
	// for all msgs in the track
	for(const msg of msgs) {
		// meta
		if(msg.is_meta) {
			switch(msg.meta) {
				case 'text':
					parseText(wg, msg);
			}
		// note
		} else {
			switch(msg.msg) {
				case 'note_on':
					parseNote(wg, msg);
			}
		}				
	}    
	return wg.tl;
}