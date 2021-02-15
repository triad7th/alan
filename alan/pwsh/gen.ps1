[cmdletbinding()]
param(
    [Parameter(Mandatory = $true)]
    $Name,
    $Midi = '.\audio\ff_type_003.mid',
    $Set = '.\sets\ff',    
    $Audio = '.\audio\ff_type_001.mp3',
    $SvgPack = '..\aled\Library\images\pj-beb.json',
    $SvgApplyPath = '\scene\hand\family',
    $SvgPath = '..\aled\library\svgs',
    $Consts = {},
    [bool]$Export = $false
)

# const
$Now = Get-Date
# ASCII logo from
# http://patorjk.com/software/taag/#p=testall&f=Efti%20Italic&t=AllyWorld
$LogoPatorjksCheese = @'
      _____    ____         ____       _____      _____  _____                   _____         _____    ____             _____   
  ___|\    \  |    |       |    |     |\    \    /    /||\    \   _____     ____|\    \    ___|\    \  |    |        ___|\    \  
 /    /\    \ |    |       |    |     | \    \  /    / || |    | /    /|   /     /\    \  |    |\    \ |    |       |    |\    \ 
|    |  |    ||    |       |    |     |  \____\/    /  /\/     / |    ||  /     /  \    \ |    | |    ||    |       |    | |    |
|    |__|    ||    |  ____ |    |  ____\ |    /    /  / /     /_  \   \/ |     |    |    ||    |/____/ |    |  ____ |    | |    |
|    .--.    ||    | |    ||    | |    |\|___/    /  / |     // \  \   \ |     |    |    ||    |\    \ |    | |    ||    | |    |
|    |  |    ||    | |    ||    | |    |    /    /  /  |    |/   \ |    ||\     \  /    /||    | |    ||    | |    ||    | |    |
|____|  |____||____|/____/||____|/____/|   /____/  /   |\ ___/\   \|   /|| \_____\/____/ ||____| |____||____|/____/||____|/____/|
|    |  |    ||    |     |||    |     ||  |`    | /    | |   | \______/ | \ |    ||    | /|    | |    ||    |     |||    /    | |
|____|  |____||____|_____|/|____|_____|/  |_____|/      \|___|/\ |    | |  \|____||____|/ |____| |____||____|_____|/|____|____|/ 
  \(      )/    \(    )/     \(    )/        )/            \(   \|____|/      \(    )/      \(     )/    \(    )/     \(    )/   
   '      '      '    '       '    '         '              '      )/          '    '        '     '      '    '       '    '    
                                                                 '                                                             

'@
$LogoGraffiti = @'
   _____  .__  .__          __      __            .__       .___
  /  _  \ |  | |  | ___.__./  \    /  \___________|  |    __| _/
 /  /_\  \|  | |  |<   |  |\   \/\/   /  _ \_  __ \  |   / __ | 
/    |    \  |_|  |_\___  | \        (  <_> )  | \/  |__/ /_/ | 
\____|__  /____/____/ ____|  \__/\  / \____/|__|  |____/\____ | 
        \/          \/            \/                         \/ 
'@

# title
""
$LogoPatorjksCheese
"Movie Generator"
"-" * "Movie Generator".Length
"Run at: $Now"
""
# set
$scenePath = "$Set\$SvgApplyPath\"
& "..\aled\parse.ps1" $SvgPack $scenePath "$SvgPath\"
""

# set update(consts)
"Set Update(Consts)"
"-" * "Set Update(Consts)".Length
$Consts | fl
$updated = $false
dir "$Set\*.json" -Recurse | foreach {    
    $con = gc $_
    foreach($const in $Consts.psobject.Properties) {$con = $con -replace "<<<$($const.Name)>>>", "$($const.Value)"}
    if (compare $con (gc $_)) {
        $updated = $true
        "Updated: $($_.FullName)"
        copy $_.FullName "$($_.FullName).bak" -Force
        $con | Out-File $_ -Force -Verbose
    }
}
if (!$updated) {"Nothing to update."}
""

# build
& '.\pwsh\build.ps1' $midi $set
""

# set rollback(consts)
"Set Rollback(Consts)"
"-" * "Set Rollback(Consts)".Length
$baks = (dir "$Set\*.bak" -Recurse)
if ($baks) {
    $baks | foreach {    
        "Rollback: $($_.FullName)"
        copy $_ ($_.FullName -replace "\.bak$", "") -Force -Verbose
        rm $_ -Force -Verbose
    }
} else {    
    "Nothing to rollback."
}
""

if ($Export) {
    # render
    $videoPath = "$((gl).Path)\video\$Name"
    $videoFile = "$videoPath\$Name-video.mp4"
    if(Test-Path $videoFile) {
        "Render"
        "-" * "Render".Length
        "The video file already exists. Skip Video Rendering..."
    } else {
        & ".\pwsh\render.ps1" $Name
    }

    # audio
    ""
    $audioPath = "$((gl).Path)\video\$Name"
    $audioFile = "$audioPath\$Name-audio$((gi $Audio).Extension)"
    $moviePath = "$((gl).Path)\video\$Name"
    $movieFile = "$moviePath\$Name.mp4"

    copy $Audio $audioFile -Force -Verbose
    & ".\pwsh\audio.ps1" $videoFile $audioFile $movieFile

    $indexHtmlFile = "$((gl).Path)\index.html"
    $indexHtml = gc $indexHtmlFile
    $lineToChange = $indexHtml | sls 'id="song"'
    $replaceText = $lineToChange.Line -replace '(src=\"audio\/)(.*)(\">)', "`$1$((Get-Item $Audio).Name)`$3"
    $indexHtml[$lineToChange.LineNumber - 1] = $replaceText

    "Html : $indexHtmlFile"
    "Line : $replaceText"

    $indexHtml | Out-File $indexHtmlFile -Force
} else 
{
    # audio
    "Audio"
    "-" * "Audio".Length
    $indexHtmlFile = "$((gl).Path)\index.html"    
    $indexHtml = gc $indexHtmlFile
    $lineToChange = $indexHtml | sls 'id="song"'
    $replaceText = $lineToChange.Line -replace '(src=\"audio\/)(.*)(\">)', "`$1$((Get-Item $Audio).Name)`$3"
    $indexHtml[$lineToChange.LineNumber - 1] = $replaceText

    "Html : $indexHtmlFile"
    "Line : $replaceText"

    $indexHtml | Out-File $indexHtmlFile -Force
}
