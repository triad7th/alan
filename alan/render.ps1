[cmdletbinding()]
param(
    [parameter(
        Mandatory         = $false,
        ValueFromPipeline = $true)]
    $item,
    $video
)

$item = gi $item
$url = "file://$($item.FullName)?render"
if ($video -eq $null) {
    $video = $item.BaseName + ".mp4"
}

& "node" "C:\repos_ext\html5-animation-video-renderer\render.js" --url $url --video $video