[cmdletbinding()]
param(
    $Video,
    $Audio,
    $Output = 'output.mp4'
)

"Audio"
"-" * "Audio".Length
"Video: $video"
"Audio: $audio"

& "ffmpeg" -i $Video -i $Audio -y -c:v copy -c:a copy $Output
