dir "*.wave" | % { ffmpeg -i $_.Name -acodec libvorbis -ar 48000 -ac 2 -b:a 312k "$($_.BaseName).ogg" -y }
