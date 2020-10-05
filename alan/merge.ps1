[cmdletbinding()]
param(
    $Video,
    $Audio
)

& "ffmpeg" -i $Video -i $Audio -c:v copy -c:a copy output.mp4
