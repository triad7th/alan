[cmdletbinding()]
param(
    [parameter(
        Mandatory         = $false,
        ValueFromPipeline = $true)]
    $item
)

$url = "http://localhost:8080?render"
$path = "$((gl).Path)\video"

mkdir "$path\$item" -Force | Out-Null
$video = "$path\$item\$item-video.mp4"
$log = "$path\$item\$item-video.log"

& "node" "C:\repos_ext\html5-animation-video-renderer\render.js" --url $url --video $video | tee $log