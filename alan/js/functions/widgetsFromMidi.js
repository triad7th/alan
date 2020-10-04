import { Widget } from '../classes/widget.js'

function isWidget(track) { if(track.track_name[0] === '#') return true; else false; }
function getName(track) { return track.track_name.slice(1); }
function parseText(widgets, name, msg, msgs) {
	const meta = JSON.parse(msg.text);
	switch(meta.type) {
		case 'create':
			widgets[name] = new Widget(meta);
			widgets[name].content = Widget.conFromImg(`./images/${name}.png`);
			widgets[name].tl = msgs;
			break;
		default:
			break;
	}
}

export function widgetsFromMidi(tracks) {
	var widgets = {};
	// for all tracks in the midi
	for(const track of tracks) {
		if(isWidget(track)) {
			const name = getName(track);
			// for all msgs in the track
			for(const msg of track.track_msgs) {
				// meta
				if(msg.is_meta) {
					switch(msg.meta) {
						case 'text':
							parseText(widgets, name, msg, track.track_msgs);
					}
				}
			}    
		}
	}
	return widgets;
}